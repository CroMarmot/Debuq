import { e as h } from "@nf-internal/chunk-JKOY2XUY";
var $ = (() => { class s {
    constructor(e, t, i, a, n) { this._legacyCanvasSize = s.DEFAULT_CANVAS_SIZE, this._preferredCamera = "environment", this._maxScansPerSecond = 25, this._lastScanTimestamp = -1, this._destroyed = this._flashOn = this._paused = this._active = !1, this.$video = e, this.$canvas = document.createElement("canvas"), i && typeof i == "object" ? this._onDecode = t : (console.warn(i || a || n ? "You're using a deprecated version of the QrScanner constructor which will be removed in the future" : "Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."), this._legacyOnDecode = t), t = typeof i == "object" ? i : {}, this._onDecodeError = t.onDecodeError || (typeof i == "function" ? i : this._onDecodeError), this._calculateScanRegion = t.calculateScanRegion || (typeof a == "function" ? a : this._calculateScanRegion), this._preferredCamera = t.preferredCamera || n || this._preferredCamera, this._legacyCanvasSize = typeof i == "number" ? i : typeof a == "number" ? a : this._legacyCanvasSize, this._maxScansPerSecond = t.maxScansPerSecond || this._maxScansPerSecond, this._onPlay = this._onPlay.bind(this), this._onLoadedMetaData = this._onLoadedMetaData.bind(this), this._onVisibilityChange = this._onVisibilityChange.bind(this), this._updateOverlay = this._updateOverlay.bind(this), e.disablePictureInPicture = !0, e.playsInline = !0, e.muted = !0; let o = !1; if (e.hidden && (e.hidden = !1, o = !0), document.body.contains(e) || (document.body.appendChild(e), o = !0), i = e.parentElement, t.highlightScanRegion || t.highlightCodeOutline) {
        if (a = !!t.overlay, this.$overlay = t.overlay || document.createElement("div"), n = this.$overlay.style, n.position = "absolute", n.display = "none", n.pointerEvents = "none", this.$overlay.classList.add("scan-region-highlight"), !a && t.highlightScanRegion) {
            this.$overlay.innerHTML = '<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';
            try {
                this.$overlay.firstElementChild.animate({ transform: ["scale(.98)", "scale(1.01)"] }, { duration: 400, iterations: 1 / 0, direction: "alternate", easing: "ease-in-out" });
            }
            catch { }
            i.insertBefore(this.$overlay, this.$video.nextSibling);
        }
        t.highlightCodeOutline && (this.$overlay.insertAdjacentHTML("beforeend", '<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'), this.$codeOutlineHighlight = this.$overlay.lastElementChild);
    } this._scanRegion = this._calculateScanRegion(e), requestAnimationFrame(() => { let c = window.getComputedStyle(e); c.display === "none" && (e.style.setProperty("display", "block", "important"), o = !0), c.visibility !== "visible" && (e.style.setProperty("visibility", "visible", "important"), o = !0), o && (console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."), e.style.opacity = "0", e.style.width = "0", e.style.height = "0", this.$overlay && this.$overlay.parentElement && this.$overlay.parentElement.removeChild(this.$overlay), delete this.$overlay, delete this.$codeOutlineHighlight), this.$overlay && this._updateOverlay(); }), e.addEventListener("play", this._onPlay), e.addEventListener("loadedmetadata", this._onLoadedMetaData), document.addEventListener("visibilitychange", this._onVisibilityChange), window.addEventListener("resize", this._updateOverlay), this._qrEnginePromise = s.createQrEngine(); }
    static set WORKER_PATH(e) { console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions."); }
    static hasCamera() { return h(this, null, function* () { try {
        return !!(yield s.listCameras(!1)).length;
    }
    catch {
        return !1;
    } }); }
    static listCameras(e = !1) { return h(this, null, function* () { if (!navigator.mediaDevices)
        return []; let t = () => h(null, null, function* () { return (yield navigator.mediaDevices.enumerateDevices()).filter(a => a.kind === "videoinput"); }), i; try {
        e && (yield t()).every(a => !a.label) && (i = yield navigator.mediaDevices.getUserMedia({ audio: !1, video: !0 }));
    }
    catch { } try {
        return (yield t()).map((a, n) => ({ id: a.deviceId, label: a.label || (n === 0 ? "Default Camera" : `Camera ${n + 1}`) }));
    }
    finally {
        i && (console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"), s._stopVideoStream(i));
    } }); }
    hasFlash() { return h(this, null, function* () { let e; try {
        if (this.$video.srcObject) {
            if (!(this.$video.srcObject instanceof MediaStream))
                return !1;
            e = this.$video.srcObject;
        }
        else
            e = (yield this._getCameraStream()).stream;
        return "torch" in e.getVideoTracks()[0].getSettings();
    }
    catch {
        return !1;
    }
    finally {
        e && e !== this.$video.srcObject && (console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"), s._stopVideoStream(e));
    } }); }
    isFlashOn() { return this._flashOn; }
    toggleFlash() { return h(this, null, function* () { this._flashOn ? yield this.turnFlashOff() : yield this.turnFlashOn(); }); }
    turnFlashOn() { return h(this, null, function* () { if (!this._flashOn && !this._destroyed && (this._flashOn = !0, this._active && !this._paused))
        try {
            if (!(yield this.hasFlash()))
                throw "No flash available";
            yield this.$video.srcObject.getVideoTracks()[0].applyConstraints({ advanced: [{ torch: !0 }] });
        }
        catch (e) {
            throw this._flashOn = !1, e;
        } }); }
    turnFlashOff() { return h(this, null, function* () { this._flashOn && (this._flashOn = !1, yield this._restartVideoStream()); }); }
    destroy() { this.$video.removeEventListener("loadedmetadata", this._onLoadedMetaData), this.$video.removeEventListener("play", this._onPlay), document.removeEventListener("visibilitychange", this._onVisibilityChange), window.removeEventListener("resize", this._updateOverlay), this._destroyed = !0, this._flashOn = !1, this.stop(), s._postWorkerMessage(this._qrEnginePromise, "close"); }
    start() { return h(this, null, function* () { if (this._destroyed)
        throw Error("The QR scanner can not be started as it had been destroyed."); if ((!this._active || this._paused) && (window.location.protocol !== "https:" && console.warn("The camera stream is only accessible if the page is transferred via https."), this._active = !0, !document.hidden))
        if (this._paused = !1, this.$video.srcObject)
            yield this.$video.play();
        else
            try {
                let { stream: e, facingMode: t } = yield this._getCameraStream();
                !this._active || this._paused ? s._stopVideoStream(e) : (this._setVideoMirror(t), this.$video.srcObject = e, yield this.$video.play(), this._flashOn && (this._flashOn = !1, this.turnFlashOn().catch(() => { })));
            }
            catch (e) {
                if (!this._paused)
                    throw this._active = !1, e;
            } }); }
    stop() { this.pause(), this._active = !1; }
    pause(e = !1) { return h(this, null, function* () { if (this._paused = !0, !this._active)
        return !0; this.$video.pause(), this.$overlay && (this.$overlay.style.display = "none"); let t = () => { this.$video.srcObject instanceof MediaStream && (s._stopVideoStream(this.$video.srcObject), this.$video.srcObject = null); }; return e ? (t(), !0) : (yield new Promise(i => setTimeout(i, 300)), this._paused ? (t(), !0) : !1); }); }
    setCamera(e) { return h(this, null, function* () { e !== this._preferredCamera && (this._preferredCamera = e, yield this._restartVideoStream()); }); }
    static scanImage(e, t, i, a, n = !1, o = !1) { return h(this, null, function* () { let c, g = !1; t && ("scanRegion" in t || "qrEngine" in t || "canvas" in t || "disallowCanvasResizing" in t || "alsoTryWithoutScanRegion" in t || "returnDetailedScanResult" in t) ? (c = t.scanRegion, i = t.qrEngine, a = t.canvas, n = t.disallowCanvasResizing || !1, o = t.alsoTryWithoutScanRegion || !1, g = !0) : console.warn(t || i || a || n || o ? "You're using a deprecated api for scanImage which will be removed in the future." : "Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."), t = !!i; try {
        let m, d;
        [i, m] = yield Promise.all([i || s.createQrEngine(), s._loadImage(e)]), [a, d] = s._drawToCanvas(m, c, a, n);
        let v;
        if (i instanceof Worker) {
            let r = i;
            t || s._postWorkerMessageSync(r, "inversionMode", "both"), v = yield new Promise((l, _) => { let f, p, u, S = -1; p = y => { y.data.id === S && (r.removeEventListener("message", p), r.removeEventListener("error", u), clearTimeout(f), y.data.data !== null ? l({ data: y.data.data, cornerPoints: s._convertPoints(y.data.cornerPoints, c) }) : _(s.NO_QR_CODE_FOUND)); }, u = y => { r.removeEventListener("message", p), r.removeEventListener("error", u), clearTimeout(f), _("Scanner error: " + (y ? y.message || y : "Unknown Error")); }, r.addEventListener("message", p), r.addEventListener("error", u), f = setTimeout(() => u("timeout"), 1e4); let w = d.getImageData(0, 0, a.width, a.height); S = s._postWorkerMessageSync(r, "decode", w, [w.data.buffer]); });
        }
        else
            v = yield Promise.race([new Promise((r, l) => window.setTimeout(() => l("Scanner error: timeout"), 1e4)), h(null, null, function* () { try {
                    var [r] = yield i.detect(a);
                    if (!r)
                        throw s.NO_QR_CODE_FOUND;
                    return { data: r.rawValue, cornerPoints: s._convertPoints(r.cornerPoints, c) };
                }
                catch (l) {
                    if (r = l.message || l, /not implemented|service unavailable/.test(r))
                        return s._disableBarcodeDetector = !0, s.scanImage(e, { scanRegion: c, canvas: a, disallowCanvasResizing: n, alsoTryWithoutScanRegion: o });
                    throw `Scanner error: ${r}`;
                } })]);
        return g ? v : v.data;
    }
    catch (m) {
        if (!c || !o)
            throw m;
        let d = yield s.scanImage(e, { qrEngine: i, canvas: a, disallowCanvasResizing: n });
        return g ? d : d.data;
    }
    finally {
        t || s._postWorkerMessage(i, "close");
    } }); }
    setGrayscaleWeights(e, t, i, a = !0) { s._postWorkerMessage(this._qrEnginePromise, "grayscaleWeights", { red: e, green: t, blue: i, useIntegerApproximation: a }); }
    setInversionMode(e) { s._postWorkerMessage(this._qrEnginePromise, "inversionMode", e); }
    static createQrEngine(e) { return h(this, null, function* () { if (e && console.warn("Specifying a worker path is not required and not supported anymore."), e = () => import("@nf-internal/qr-scanner-worker.min-LK5OYRQX").then(i => i.createWorker()), !(!s._disableBarcodeDetector && "BarcodeDetector" in window && BarcodeDetector.getSupportedFormats && (yield BarcodeDetector.getSupportedFormats()).includes("qr_code")))
        return e(); let t = navigator.userAgentData; return t && t.brands.some(({ brand: i }) => /Chromium/i.test(i)) && /mac ?OS/i.test(t.platform) && (yield t.getHighEntropyValues(["architecture", "platformVersion"]).then(({ architecture: i, platformVersion: a }) => /arm/i.test(i || "arm") && 13 <= parseInt(a || "13")).catch(() => !0)) ? e() : new BarcodeDetector({ formats: ["qr_code"] }); }); }
    _onPlay() { this._scanRegion = this._calculateScanRegion(this.$video), this._updateOverlay(), this.$overlay && (this.$overlay.style.display = ""), this._scanFrame(); }
    _onLoadedMetaData() { this._scanRegion = this._calculateScanRegion(this.$video), this._updateOverlay(); }
    _onVisibilityChange() { document.hidden ? this.pause() : this._active && this.start(); }
    _calculateScanRegion(e) { let t = Math.round(.6666666666666666 * Math.min(e.videoWidth, e.videoHeight)); return { x: Math.round((e.videoWidth - t) / 2), y: Math.round((e.videoHeight - t) / 2), width: t, height: t, downScaledWidth: this._legacyCanvasSize, downScaledHeight: this._legacyCanvasSize }; }
    _updateOverlay() { requestAnimationFrame(() => { if (this.$overlay) {
        var e = this.$video, t = e.videoWidth, i = e.videoHeight, a = e.offsetWidth, n = e.offsetHeight, o = e.offsetLeft, c = e.offsetTop, g = window.getComputedStyle(e), m = g.objectFit, d = t / i, v = a / n;
        switch (m) {
            case "none":
                var r = t, l = i;
                break;
            case "fill":
                r = a, l = n;
                break;
            default: (m === "cover" ? d > v : d < v) ? (l = n, r = l * d) : (r = a, l = r / d), m === "scale-down" && (r = Math.min(r, t), l = Math.min(l, i));
        }
        var [_, f] = g.objectPosition.split(" ").map((u, S) => { let w = parseFloat(u); return u.endsWith("%") ? (S ? n - l : a - r) * w / 100 : w; });
        g = this._scanRegion.width || t, v = this._scanRegion.height || i, m = this._scanRegion.x || 0;
        var p = this._scanRegion.y || 0;
        d = this.$overlay.style, d.width = `${g / t * r}px`, d.height = `${v / i * l}px`, d.top = `${c + f + p / i * l}px`, i = /scaleX\(-1\)/.test(e.style.transform), d.left = `${o + (i ? a - _ - r : _) + (i ? t - m - g : m) / t * r}px`, d.transform = e.style.transform;
    } }); }
    static _convertPoints(e, t) { if (!t)
        return e; let i = t.x || 0, a = t.y || 0, n = t.width && t.downScaledWidth ? t.width / t.downScaledWidth : 1; t = t.height && t.downScaledHeight ? t.height / t.downScaledHeight : 1; for (let o of e)
        o.x = o.x * n + i, o.y = o.y * t + a; return e; }
    _scanFrame() { !this._active || this.$video.paused || this.$video.ended || ("requestVideoFrameCallback" in this.$video ? this.$video.requestVideoFrameCallback.bind(this.$video) : requestAnimationFrame)(() => h(this, null, function* () { if (!(1 >= this.$video.readyState)) {
        var e = Date.now() - this._lastScanTimestamp, t = 1e3 / this._maxScansPerSecond;
        e < t && (yield new Promise(a => setTimeout(a, t - e))), this._lastScanTimestamp = Date.now();
        try {
            var i = yield s.scanImage(this.$video, { scanRegion: this._scanRegion, qrEngine: this._qrEnginePromise, canvas: this.$canvas });
        }
        catch (a) {
            if (!this._active)
                return;
            this._onDecodeError(a);
        }
        !s._disableBarcodeDetector || (yield this._qrEnginePromise) instanceof Worker || (this._qrEnginePromise = s.createQrEngine()), i ? (this._onDecode ? this._onDecode(i) : this._legacyOnDecode && this._legacyOnDecode(i.data), this.$codeOutlineHighlight && (clearTimeout(this._codeOutlineHighlightRemovalTimeout), this._codeOutlineHighlightRemovalTimeout = void 0, this.$codeOutlineHighlight.setAttribute("viewBox", `${this._scanRegion.x || 0} ${this._scanRegion.y || 0} ${this._scanRegion.width || this.$video.videoWidth} ${this._scanRegion.height || this.$video.videoHeight}`), this.$codeOutlineHighlight.firstElementChild.setAttribute("points", i.cornerPoints.map(({ x: a, y: n }) => `${a},${n}`).join(" ")), this.$codeOutlineHighlight.style.display = "")) : this.$codeOutlineHighlight && !this._codeOutlineHighlightRemovalTimeout && (this._codeOutlineHighlightRemovalTimeout = setTimeout(() => this.$codeOutlineHighlight.style.display = "none", 100));
    } this._scanFrame(); })); }
    _onDecodeError(e) { e !== s.NO_QR_CODE_FOUND && console.log(e); }
    _getCameraStream() { return h(this, null, function* () { if (!navigator.mediaDevices)
        throw "Camera not found."; let e = /^(environment|user)$/.test(this._preferredCamera) ? "facingMode" : "deviceId", t = [{ width: { min: 1024 } }, { width: { min: 768 } }, {}], i = t.map(a => Object.assign({}, a, { [e]: { exact: this._preferredCamera } })); for (let a of [...i, ...t])
        try {
            let n = yield navigator.mediaDevices.getUserMedia({ video: a, audio: !1 }), o = this._getFacingMode(n) || (a.facingMode ? this._preferredCamera : this._preferredCamera === "environment" ? "user" : "environment");
            return { stream: n, facingMode: o };
        }
        catch { } throw "Camera not found."; }); }
    _restartVideoStream() { return h(this, null, function* () { let e = this._paused; (yield this.pause(!0)) && !e && this._active && (yield this.start()); }); }
    static _stopVideoStream(e) { for (let t of e.getTracks())
        t.stop(), e.removeTrack(t); }
    _setVideoMirror(e) { this.$video.style.transform = "scaleX(" + (e === "user" ? -1 : 1) + ")"; }
    _getFacingMode(e) { return (e = e.getVideoTracks()[0]) ? /rear|back|environment/i.test(e.label) ? "environment" : /front|user|face/i.test(e.label) ? "user" : null : null; }
    static _drawToCanvas(e, t, i, a = !1) { i = i || document.createElement("canvas"); let n = t && t.x ? t.x : 0, o = t && t.y ? t.y : 0, c = t && t.width ? t.width : e.videoWidth || e.width, g = t && t.height ? t.height : e.videoHeight || e.height; return a || (a = t && t.downScaledWidth ? t.downScaledWidth : c, t = t && t.downScaledHeight ? t.downScaledHeight : g, i.width !== a && (i.width = a), i.height !== t && (i.height = t)), t = i.getContext("2d", { alpha: !1 }), t.imageSmoothingEnabled = !1, t.drawImage(e, n, o, c, g, 0, 0, i.width, i.height), [i, t]; }
    static _loadImage(e) { return h(this, null, function* () { if (e instanceof Image)
        return yield s._awaitImageLoad(e), e; if (e instanceof HTMLVideoElement || e instanceof HTMLCanvasElement || e instanceof SVGImageElement || "OffscreenCanvas" in window && e instanceof OffscreenCanvas || "ImageBitmap" in window && e instanceof ImageBitmap)
        return e; if (e instanceof File || e instanceof Blob || e instanceof URL || typeof e == "string") {
        let t = new Image;
        t.src = e instanceof File || e instanceof Blob ? URL.createObjectURL(e) : e.toString();
        try {
            return yield s._awaitImageLoad(t), t;
        }
        finally {
            (e instanceof File || e instanceof Blob) && URL.revokeObjectURL(t.src);
        }
    }
    else
        throw "Unsupported image type."; }); }
    static _awaitImageLoad(e) { return h(this, null, function* () { e.complete && e.naturalWidth !== 0 || (yield new Promise((t, i) => { let a = n => { e.removeEventListener("load", a), e.removeEventListener("error", a), n instanceof ErrorEvent ? i("Image load error") : t(); }; e.addEventListener("load", a), e.addEventListener("error", a); })); }); }
    static _postWorkerMessage(e, t, i, a) { return h(this, null, function* () { return s._postWorkerMessageSync(yield e, t, i, a); }); }
    static _postWorkerMessageSync(e, t, i, a) { if (!(e instanceof Worker))
        return -1; let n = s._workerMessageId++; return e.postMessage({ id: n, type: t, data: i }, a), n; }
} return s.DEFAULT_CANVAS_SIZE = 400, s.NO_QR_CODE_FOUND = "No QR code found", s._disableBarcodeDetector = !1, s._workerMessageId = 0, s; })(), E = $;
export { E as default };
