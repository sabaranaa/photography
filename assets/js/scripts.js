/*!
 * VERSION: 1.20.4
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    e = function(a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
                        delete a.cycle
                    },
                    f = function(a, b, d) {
                        c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = f.prototype.render
                    },
                    g = 1e-10,
                    h = c._internals,
                    i = h.isSelector,
                    j = h.isArray,
                    k = f.prototype = c.to({}, .1, {}),
                    l = [];
                f.version = "1.20.4", k.constructor = f, k.kill()._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, k.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this)
                }, k.updateTo = function(a, b) {
                    var d, e = this.ratio,
                        f = this.vars.immediateRender || a.immediateRender;
                    b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (d in a) this.vars[d] = a[d];
                    if (this._initted || f)
                        if (b) this._initted = !1, f && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var g = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || f)
                        for (var h, i = 1 / (1 - e), j = this._firstPT; j;) h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next;
                    return this
                }, k.render = function(a, b, d) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var e, f, i, j, k, l, m, n, o, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        q = this._time,
                        r = this._totalTime,
                        s = this._cycle,
                        t = this._duration,
                        u = this._rawPrevTime;
                    if (a >= p - 1e-7 && a >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = t, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (e = !0, f = "onComplete", d = d || this._timeline.autoRemoveChildren), 0 === t && (this._initted || !this.vars.lazy || d) && (this._startTime === this._timeline._duration && (a = 0), (0 > u || 0 >= a && a >= -1e-7 || u === g && "isPause" !== this.data) && u !== a && (d = !0, u > g && (f = "onReverseComplete")), this._rawPrevTime = n = !b || a || u === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === t && u > 0) && (f = "onReverseComplete", e = this._reversed), 0 > a && (this._active = !1, 0 === t && (this._initted || !this.vars.lazy || d) && (u >= 0 && (d = !0), this._rawPrevTime = n = !b || a || u === a ? a : g)), this._initted || (d = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (j = t + this._repeatDelay, this._cycle = this._totalTime / j >> 0, 0 !== this._cycle && this._cycle === this._totalTime / j && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * j, this._yoyo && 0 !== (1 & this._cycle) && (this._time = t - this._time, o = this._yoyoEase || this.vars.yoyoEase, o && (this._yoyoEase || (o !== !0 || this._initted ? this._yoyoEase = o = o === !0 ? this._ease : o instanceof Ease ? o : Ease.map[o] : (o = this.vars.ease, this._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, this.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), this.ratio = o ? 1 - o.getRatio((t - this._time) / t) : 0)), this._time > t ? this._time = t : this._time < 0 && (this._time = 0)), this._easeType && !o ? (k = this._time / t, l = this._easeType, m = this._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : this._time / t < .5 ? this.ratio = k / 2 : this.ratio = 1 - k / 2) : o || (this.ratio = this._ease.getRatio(this._time / t))), q === this._time && !d && s === this._cycle) return void(r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!d && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = q, this._totalTime = r, this._rawPrevTime = u, this._cycle = s, h.lazyTweens.push(this), void(this._lazy = [a, b]);
                        !this._time || e || o ? e && this._ease._calcEnd && !o && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / t)
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== q && a >= 0 && (this._active = !0), 0 === r && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, !0, d) : f || (f = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === t) && (b || this._callback("onStart"))), i = this._firstPT; i;) i.f ? i.t[i.p](i.c * this.ratio + i.s) : i.t[i.p] = i.c * this.ratio + i.s, i = i._next;
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, !0, d), b || (this._totalTime !== r || f) && this._callback("onUpdate")), this._cycle !== s && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), f && (!this._gc || d) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, !0, d), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[f] && this._callback(f), 0 === t && this._rawPrevTime === g && n !== g && (this._rawPrevTime = 0))
                }, f.to = function(a, b, c) {
                    return new f(a, b, c)
                }, f.from = function(a, b, c) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c)
                }, f.fromTo = function(a, b, c, d) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d)
                }, f.staggerTo = f.allTo = function(a, b, g, h, k, m, n) {
                    h = h || 0;
                    var o, p, q, r, s = 0,
                        t = [],
                        u = function() {
                            g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l)
                        },
                        v = g.cycle,
                        w = g.startAt && g.startAt.cycle;
                    for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && (a = d(a), a.reverse(), h *= -1), o = a.length - 1, q = 0; o >= q; q++) {
                        p = {};
                        for (r in g) p[r] = g[r];
                        if (v && (e(p, a, q), null != p.duration && (b = p.duration, delete p.duration)), w) {
                            w = p.startAt = {};
                            for (r in g.startAt) w[r] = g.startAt[r];
                            e(p.startAt, a, q)
                        }
                        p.delay = s + (p.delay || 0), q === o && k && (p.onComplete = u), t[q] = new f(a[q], b, p), s += h
                    }
                    return t
                }, f.staggerFrom = f.allFrom = function(a, b, c, d, e, g, h) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h)
                }, f.staggerFromTo = f.allFromTo = function(a, b, c, d, e, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i)
                }, f.delayedCall = function(a, b, c, d, e) {
                    return new f(b, 0, {
                        delay: a,
                        onComplete: b,
                        onCompleteParams: c,
                        callbackScope: d,
                        onReverseComplete: b,
                        onReverseCompleteParams: c,
                        immediateRender: !1,
                        useFrames: e,
                        overwrite: 0
                    })
                }, f.set = function(a, b) {
                    return new f(a, 0, b)
                }, f.isTweening = function(a) {
                    return c.getTweensOf(a, !0).length > 0
                };
                var m = function(a, b) {
                        for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(m(f, b)), e = d.length), f = f._next;
                        return d
                    },
                    n = f.getAllTweens = function(b) {
                        return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b))
                    };
                f.killAll = function(a, c, d, e) {
                    null == c && (c = !0), null == d && (d = !0);
                    var f, g, h, i = n(0 != e),
                        j = i.length,
                        k = c && d && e;
                    for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
                }, f.killChildTweensOf = function(a, b) {
                    if (null != a) {
                        var e, g, k, l, m, n = h.tweenLookup;
                        if ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a))
                            for (l = a.length; --l > -1;) f.killChildTweensOf(a[l], b);
                        else {
                            e = [];
                            for (k in n)
                                for (g = n[k].target.parentNode; g;) g === a && (e = e.concat(n[k].tweens)), g = g.parentNode;
                            for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1)
                        }
                    }
                };
                var o = function(a, c, d, e) {
                    c = c !== !1, d = d !== !1, e = e !== !1;
                    for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
                };
                return f.pauseAll = function(a, b, c) {
                    o(!0, a, b, c)
                }, f.resumeAll = function(a, b, c) {
                    o(!1, a, b, c)
                }, f.globalTimeScale = function(b) {
                    var d = a._rootTimeline,
                        e = c.ticker.time;
                    return arguments.length ? (b = b || g, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
                }, k.progress = function(a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
                }, k.totalProgress = function(a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
                }, k.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, k.duration = function(b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                }, k.totalDuration = function(a) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, k.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, k.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, k.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, f
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var c, d, e = this.vars;
                        for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                        i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
                    },
                    e = 1e-10,
                    f = c._internals,
                    g = d._internals = {},
                    h = f.isSelector,
                    i = f.isArray,
                    j = f.lazyTweens,
                    k = f.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    m = function(a) {
                        var b, c = {};
                        for (b in a) c[b] = a[b];
                        return c
                    },
                    n = function(a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
                        delete a.cycle
                    },
                    o = g.pauseCallback = function() {},
                    p = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    q = d.prototype = new b;
                return d.version = "1.20.4", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function(a, b, d, e) {
                    var f = d.repeat && l.TweenMax || c;
                    return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
                }, q.from = function(a, b, d, e) {
                    return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
                }, q.fromTo = function(a, b, d, e, f) {
                    var g = e.repeat && l.TweenMax || c;
                    return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
                }, q.staggerTo = function(a, b, e, f, g, i, j, k) {
                    var l, o, q = new d({
                            onComplete: i,
                            onCompleteParams: j,
                            callbackScope: k,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        r = e.cycle;
                    for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++) l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f);
                    return this.add(q, g)
                }, q.staggerFrom = function(a, b, c, d, e, f, g, h) {
                    return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
                }, q.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
                }, q.call = function(a, b, d, e) {
                    return this.add(c.delayedCall(0, a, b, d), e)
                }, q.set = function(a, b, d) {
                    return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
                }, d.exportRoot = function(a, b) {
                    a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                    var e, f, g, h, i = new d(a),
                        j = i._timeline;
                    for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h;
                    return j.add(i, 0), e && i.totalDuration(), i
                }, q.add = function(e, f, g, h) {
                    var j, k, l, m, n, o;
                    if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                        if (e instanceof Array || e && e.push && i(e)) {
                            for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({
                                tweens: m
                            })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, f);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(this, e, f), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
                    return this
                }, q.remove = function(b) {
                    if (b instanceof a) {
                        this._remove(b, !1);
                        var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                        return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this
                    }
                    if (b instanceof Array || b && b.push && i(b)) {
                        for (var d = b.length; --d > -1;) this.remove(b[d]);
                        return this
                    }
                    return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                }, q._remove = function(a, c) {
                    b.prototype._remove.call(this, a, c);
                    var d = this._last;
                    return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, q.append = function(a, b) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                }, q.insert = q.insertMultiple = function(a, b, c, d) {
                    return this.add(a, b || 0, c, d)
                }, q.appendMultiple = function(a, b, c, d) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                }, q.addLabel = function(a, b) {
                    return this._labels[a] = this._parseTimeOrLabel(b), this
                }, q.addPause = function(a, b, d, e) {
                    var f = c.delayedCall(0, o, d, e || this);
                    return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a)
                }, q.removeLabel = function(a) {
                    return delete this._labels[a], this
                }, q.getLabelTime = function(a) {
                    return null != this._labels[a] ? this._labels[a] : -1
                }, q._parseTimeOrLabel = function(b, c, d, e) {
                    var f, g;
                    if (e instanceof a && e.timeline === this) this.remove(e);
                    else if (e && (e instanceof Array || e.push && i(e)))
                        for (g = e.length; --g > -1;) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
                    if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
                    if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);
                    else {
                        if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f
                    }
                    return Number(b) + c
                }, q.seek = function(a, b) {
                    return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
                }, q.stop = function() {
                    return this.paused(!0)
                }, q.gotoAndPlay = function(a, b) {
                    return this.play(a, b)
                }, q.gotoAndStop = function(a, b) {
                    return this.pause(a, b)
                }, q.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, g, h, i, l, m, n = this._time,
                        o = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._startTime,
                        q = this._timeScale,
                        r = this._paused;
                    if (n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0) this._totalTime = this._time = o, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = o + 1e-4;
                    else if (1e-7 > a)
                        if (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;
                        else {
                            if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, this._initted || (i = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !b) {
                            if (a >= n)
                                for (d = this._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;
                            else
                                for (d = this._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
                            l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = a
                    }
                    if (this._time !== n && this._first || c || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && a > 0 && (this._active = !0), 0 === n && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), m = this._time, m >= n)
                            for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));)(d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        else
                            for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) {
                                if (d._active || d._startTime <= n && !d._paused && !d._gc) {
                                    if (l === d) {
                                        for (l = d._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                                        l = null, this.pause()
                                    }
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                }
                                d = g
                            }
                        this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)))
                    }
                }, q._hasPausedChild = function() {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                        a = a._next
                    }
                    return !1
                }, q.getChildren = function(a, b, d, e) {
                    e = e || -9999999999;
                    for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
                    return f
                }, q.getTweensOf = function(a, b) {
                    var d, e, f = this._gc,
                        g = [],
                        h = 0;
                    for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
                    return f && this._enabled(!1, !0), g
                }, q.recent = function() {
                    return this._recent
                }, q._contains = function(a) {
                    for (var b = a.timeline; b;) {
                        if (b === this) return !0;
                        b = b.timeline
                    }
                    return !1
                }, q.shiftChildren = function(a, b, c) {
                    c = c || 0;
                    for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                    if (b)
                        for (d in f) f[d] >= c && (f[d] += a);
                    return this._uncache(!0)
                }, q._kill = function(a, b) {
                    if (!a && !b) return this._enabled(!1, !1);
                    for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                    return e
                }, q.clear = function(a) {
                    var b = this.getChildren(!1, !0, !0),
                        c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                    return a !== !1 && (this._labels = {}), this._uncache(!0)
                }, q.invalidate = function() {
                    for (var b = this._first; b;) b.invalidate(), b = b._next;
                    return a.prototype.invalidate.call(this)
                }, q._enabled = function(a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }, q.totalTime = function(b, c, d) {
                    this._forcingPlayhead = !0;
                    var e = a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, q.duration = function(a) {
                    return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                }, q.totalDuration = function(a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(e, e._startTime - e._delay), this._calculatingDuration = 0) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale, this._time -= e._startTime, this._totalTime -= e._startTime, this._rawPrevTime -= e._startTime), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                            this._duration = this._totalDuration = d, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
                }, q.paused = function(b) {
                    if (!b)
                        for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
                    return a.prototype.paused.apply(this, arguments)
                }, q.usesFrames = function() {
                    for (var b = this._timeline; b._timeline;) b = b._timeline;
                    return b === a._rootFramesTimeline
                }, q.rawTime = function(a) {
                    return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale
                }, d
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
                var d = function(b) {
                        a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    e = 1e-10,
                    f = b._internals,
                    g = f.lazyTweens,
                    h = f.lazyRender,
                    i = _gsScope._gsDefine.globals,
                    j = new c(null, null, 1, 0),
                    k = d.prototype = new a;
                return k.constructor = d, k.kill()._gc = !1, d.version = "1.20.4", k.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                }, k.addCallback = function(a, c, d, e) {
                    return this.add(b.delayedCall(0, a, d, e), c)
                }, k.removeCallback = function(a, b) {
                    if (a)
                        if (null == b) this._kill(null, a);
                        else
                            for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }, k.removePause = function(b) {
                    return this.removeCallback(a._internals.pauseCallback, b)
                }, k.tweenTo = function(a, c) {
                    c = c || {};
                    var d, e, f, g = {
                            ease: j,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        },
                        h = c.repeat && i.TweenMax || b;
                    for (e in c) g[e] = c[e];
                    return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function() {
                        f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || [])
                    }, f
                }, k.tweenFromTo = function(a, b, c) {
                    c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [a],
                        callbackScope: this
                    }, c.immediateRender = c.immediateRender !== !1;
                    var d = this.tweenTo(b, c);
                    return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                }, k.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, i, j, k, l, m, n, o = this._time,
                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                        q = this._duration,
                        r = this._totalTime,
                        s = this._startTime,
                        t = this._timeScale,
                        u = this._rawPrevTime,
                        v = this._paused,
                        w = this._cycle;
                    if (o !== this._time && (a += this._time - o), a >= p - 1e-7 && a >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = q, a = q + 1e-4);
                    else if (1e-7 > a)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== o || 0 === q && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a;
                        else {
                            if (this._rawPrevTime = q || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, this._initted || (k = !0)
                        }
                    else if (0 === q && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = q + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = q - this._time), this._time > q ? (this._time = q, a = q + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b) {
                        if (a = this._time, a >= o || this._repeat && w !== this._cycle)
                            for (d = this._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next;
                        else
                            for (d = this._last; d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
                        m && m._startTime < q && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== w && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & w),
                            y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            z = this._totalTime,
                            A = this._cycle,
                            B = this._rawPrevTime,
                            C = this._time;
                        if (this._totalTime = w * q, this._cycle < w ? x = !x : this._totalTime += q, this._time = o, this._rawPrevTime = 0 === q ? u - 1e-4 : u, this._cycle = w, this._locked = !0, o = x ? 0 : q, this.render(o, b, 0 === q), b || this._gc || this.vars.onRepeat && (this._cycle = A, this._locked = !1, this._callback("onRepeat")), o !== this._time) return;
                        if (y && (this._cycle = w, this._locked = !0, o = x ? q + 1e-4 : -1e-4, this.render(o, !0, !1)), this._locked = !1, this._paused && !v) return;
                        this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B
                    }
                    if (!(this._time !== o && this._first || c || k || m)) return void(r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")), n = this._time, n >= o)
                        for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
                    else
                        for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));) {
                            if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                                if (m === d) {
                                    for (m = d._prev; m && m.endTime() > this._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
                                    m = null, this.pause()
                                }
                                d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                            }
                            d = i
                        }
                    this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j)))
                }, k.getActive = function(a, b, c) {
                    null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                    var d, e, f = [],
                        g = this.getChildren(a, b, c),
                        h = 0,
                        i = g.length;
                    for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
                    return f
                }, k.getLabelAfter = function(a) {
                    a || 0 !== a && (a = this._time);
                    var b, c = this.getLabelsArray(),
                        d = c.length;
                    for (b = 0; d > b; b++)
                        if (c[b].time > a) return c[b].name;
                    return null
                }, k.getLabelBefore = function(a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (b[c].time < a) return b[c].name;
                    return null
                }, k.getLabelsArray = function() {
                    var a, b = [],
                        c = 0;
                    for (a in this._labels) b[c++] = {
                        time: this._labels[a],
                        name: a
                    };
                    return b.sort(function(a, b) {
                        return a.time - b.time
                    }), b
                }, k.invalidate = function() {
                    return this._locked = !1, a.prototype.invalidate.call(this)
                }, k.progress = function(a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0
                }, k.totalProgress = function(a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0
                }, k.totalDuration = function(b) {
                    return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, k.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, k.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, k.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, k.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, k.currentLabel = function(a) {
                    return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
                }, d
            }, !0),
            function() {
                var a = 180 / Math.PI,
                    b = [],
                    c = [],
                    d = [],
                    e = {},
                    f = _gsScope._gsDefine.globals,
                    g = function(a, b, c, d) {
                        c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                    },
                    h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    i = function(a, b, c, d) {
                        var e = {
                                a: a
                            },
                            f = {},
                            g = {},
                            h = {
                                c: d
                            },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                    },
                    j = function(a, e, f, g, h) {
                        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                            x = 0,
                            y = a[0].a;
                        for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                        n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                    },
                    k = function(a, d, e, f) {
                        var h, i, j, k, l, m, n = [];
                        if (f)
                            for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof(m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                        if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;
                        for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                        return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n
                    },
                    l = function(a, f, g, i, l, m) {
                        var n, o, p, q, r, s, t, u, v = {},
                            w = [],
                            x = m || a[0];
                        l = "string" == typeof l ? "," + l + "," : h, null == f && (f = 1);
                        for (o in a[0]) w.push(o);
                        if (a.length > 1) {
                            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                                    t = !1;
                                    break
                                }
                            t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                        }
                        for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
                        for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
                        if (!i) {
                            for (n = w.length; --n > -1;)
                                if (e[o])
                                    for (p = v[w[n]],
                                        s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
                            for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
                        }
                        for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                        return v
                    },
                    m = function(a, b, c) {
                        b = b || "soft";
                        var d, e, f, h, i, j, k, l, m, n, o, p = {},
                            q = "cubic" === b ? 3 : 2,
                            r = "soft" === b,
                            s = [];
                        if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
                        for (m in a[0]) s.push(m);
                        for (j = s.length; --j > -1;) {
                            for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                            for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                            i.length = n
                        }
                        return p
                    },
                    n = function(a, b, c) {
                        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                            for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
                    },
                    o = function(a, b) {
                        b = b >> 0 || 6;
                        var c, d, e, f, g = [],
                            h = [],
                            i = 0,
                            j = 0,
                            k = b - 1,
                            l = [],
                            m = [];
                        for (c in a) n(a[c], g, b);
                        for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
                        return {
                            length: j,
                            lengths: h,
                            segments: l
                        }
                    },
                    p = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function(a, b, c) {
                            this._target = a, b instanceof Array && (b = {
                                values: b
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                            var d, e, f, g, h, i = b.values || [],
                                j = {},
                                k = i[0],
                                n = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = n ? n instanceof Array ? n : [
                                ["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]
                            ] : null;
                            for (d in k) this._props.push(d);
                            for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                                var p = o(this._beziers, this._timeRes);
                                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (n = this._autoRotate)
                                for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
                                    for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                                    d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d)
                                }
                            return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(b) {
                            var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                                n = this._func,
                                o = this._target,
                                p = b !== this._startRatio;
                            if (this._timeRes) {
                                if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                                    for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;);
                                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                                } else if (b < this._l1 && e > 0) {
                                    for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                    0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                }
                                if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                                    for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;);
                                    this._s1 = l[e - 1], this._si = e
                                } else if (b < this._s1 && e > 0) {
                                    for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                    0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                                }
                                h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                            for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i;
                            if (this._autoRotate) {
                                var q, r, s, t, u, v, w, x = this._autoRotate;
                                for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i)
                            }
                        }
                    }),
                    q = p.prototype;
                p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function(a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }, p._cssRegister = function() {
                    var a = f.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function(a, b, f, g, h, i) {
                                b instanceof Array && (b = {
                                    values: b
                                }), i = new p;
                                var j, k, l, m = b.values,
                                    n = m.length - 1,
                                    o = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                                for (k in b) q[k] = b[k];
                                return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                                    ["left", "top", "rotation", j, !1]
                                ] : null != l.end.x ? [
                                    ["x", "y", "rotation", j, !1]
                                ] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h
                            }
                        })
                    }
                }, q._mod = function(a) {
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1;) b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b)
                }, q._kill = function(a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                    if (d = this._autoRotate)
                        for (c = d.length; --c > -1;) a[d[c][2]] && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
                var c, d, e, f, g = function() {
                        a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                    },
                    h = _gsScope._gsDefine.globals,
                    i = {},
                    j = g.prototype = new a("css");
                j.constructor = g, g.version = "1.20.4", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
                    top: j,
                    right: j,
                    bottom: j,
                    left: j,
                    width: j,
                    height: j,
                    fontSize: j,
                    padding: j,
                    margin: j,
                    perspective: j,
                    lineHeight: ""
                };
                var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    y = /opacity:([^;]*)/i,
                    z = /alpha\(opacity *=.+?\)/i,
                    A = /^(rgb|hsl)/,
                    B = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    E = function(a, b) {
                        return b.toUpperCase()
                    },
                    F = /(?:Left|Right|Width)/i,
                    G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    I = /,(?=[^\)]*(?:\(|$))/gi,
                    J = /[\s,\(]/i,
                    K = Math.PI / 180,
                    L = 180 / Math.PI,
                    M = {},
                    N = {
                        style: {}
                    },
                    O = _gsScope.document || {
                        createElement: function() {
                            return N
                        }
                    },
                    P = function(a, b) {
                        return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a)
                    },
                    Q = P("div"),
                    R = P("img"),
                    S = g._internals = {
                        _specialProps: i
                    },
                    T = (_gsScope.navigator || {}).userAgent || "",
                    U = function() {
                        var a = T.indexOf("Android"),
                            b = P("a");
                        return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
                    }(),
                    V = function(a) {
                        return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function(a) {
                        _gsScope.console && console.log(a)
                    },
                    X = "",
                    Y = "",
                    Z = function(a, b) {
                        b = b || Q;
                        var c, d, e = b.style;
                        if (void 0 !== e[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                        return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null
                    },
                    $ = O.defaultView ? O.defaultView.getComputedStyle : function() {},
                    _ = g.getStyle = function(a, b, c, d, e) {
                        var f;
                        return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a)
                    },
                    aa = S.convertToPixels = function(a, c, d, e, f) {
                        if ("px" === e || !e && "lineHeight" !== c) return d;
                        if ("auto" === e || !d) return 0;
                        var h, i, j, k = F.test(c),
                            l = a,
                            m = Q.style,
                            n = 0 > d,
                            o = 1 === d;
                        if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e)
                            if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                            else {
                                if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                                else {
                                    if (l = a.parentNode || O.body, -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                                    m[k ? "width" : "height"] = d + e
                                }
                                l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0))
                            }
                        else i = $(a).lineHeight, a.style.lineHeight = d, h = parseFloat($(a).lineHeight), a.style.lineHeight = i;
                        return o && (h /= 100), n ? -h : h
                    },
                    ba = S.calculateOffset = function(a, b, c) {
                        if ("absolute" !== _(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = _(a, "margin" + d, c);
                        return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
                    },
                    ca = function(a, b) {
                        var c, d, e, f = {};
                        if (b = b || $(a, null))
                            if (c = b.length)
                                for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                            else
                                for (c in b)(-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
                        else if (b = a.currentStyle || a.style)
                            for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
                        return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
                    },
                    da = function(a, b, c, d, e) {
                        var f, g, h, i = {},
                            j = a.style;
                        for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
                        if (d)
                            for (g in d) "className" !== g && (i[g] = d[g]);
                        return {
                            difs: i,
                            firstMPT: h
                        }
                    },
                    ea = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ga = function(a, b, c) {
                        if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
                        if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = ea[b],
                            f = e.length;
                        for (c = c || $(a, null); --f > -1;) d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
                        return d
                    },
                    ha = function(a, b) {
                        if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                        (null == a || "" === a) && (a = "0 0");
                        var c, d = a.split(" "),
                            e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                            f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                        if (d.length > 3 && !b) {
                            for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
                            return a.join(",")
                        }
                        return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a
                    },
                    ia = function(a, b) {
                        return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
                    },
                    ja = function(a, b) {
                        return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
                    },
                    ka = function(a, b, c, d) {
                        var e, f, g, h, i, j = 1e-6;
                        return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
                    },
                    la = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ma = function(a, b, c) {
                        return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                    },
                    na = g.parseColor = function(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m;
                        if (a)
                            if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
                            else {
                                if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];
                                else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
                                else if ("hsl" === a.substr(0, 3))
                                    if (c = m = a.match(s), b) {
                                        if (-1 !== a.indexOf("=")) return a.match(t)
                                    } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
                                else c = a.match(s) || la.transparent;
                                c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                            }
                        else c = la.black;
                        return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
                    },
                    oa = function(a, b) {
                        var c, d, e, f = a.match(pa) || [],
                            g = 0,
                            h = "";
                        if (!f.length) return a;
                        for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                        return h + a.substr(g)
                    },
                    pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (j in la) pa += "|" + j + "\\b";
                pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function(a) {
                    var b, c = a[0] + " " + a[1];
                    pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0
                }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
                var qa = function(a, b, c, d) {
                        if (null == a) return function(a) {
                            return a
                        };
                        var e, f = b ? (a.match(pa) || [""])[0] : "",
                            g = a.split(f).join("").match(u) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(s, "") : "";
                        return k ? e = b ? function(a) {
                            var b, m, n, o;
                            if ("number" == typeof a) a += l;
                            else if (d && I.test(a)) {
                                for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                                return o.join(",")
                            }
                            if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
                                for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                            return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                        } : function(a) {
                            var b, f, m;
                            if ("number" == typeof a) a += l;
                            else if (d && I.test(a)) {
                                for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                                return f.join(",")
                            }
                            if (b = a.match(u) || [], m = b.length, k > m--)
                                for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                            return h + b.join(j) + i
                        } : function(a) {
                            return a
                        }
                    },
                    ra = function(a) {
                        return a = a.split(","),
                            function(b, c, d, e, f, g, h) {
                                var i, j = (c + "").split(" ");
                                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                                return e.parse(b, h, f, g)
                            }
                    },
                    sa = (S._setPluginRatio = function(a) {
                        this.plugin.setRatio(a);
                        for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
                        if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a)
                            for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                                if (c = i.t, c.type) {
                                    if (1 === c.type) {
                                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                        c[f] = e
                                    }
                                } else c[f] = c.s + c.xs0;
                                i = i._next
                            }
                    }, function(a, b, c, d, e) {
                        this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                    }),
                    ta = (S._parseToProxy = function(a, b, c, d, e, f) {
                        var g, h, i, j, k, l = d,
                            m = {},
                            n = {},
                            o = c._transform,
                            p = M;
                        for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                            if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
                            d = d._next
                        }
                        return {
                            proxy: m,
                            end: n,
                            firstMPT: j,
                            pt: k
                        }
                    }, S.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                        this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                    }),
                    ua = function(a, b, c, d, e, f) {
                        var g = new ta(a, b, c, d - c, e, -1, f);
                        return g.b = c, g.e = g.xs0 = d, g
                    },
                    va = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
                        c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
                        var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
                            E = d.split(", ").join(",").split(" "),
                            F = D.length,
                            G = k !== !1;
                        for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++)
                            if (p = D[m], u = E[m], x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);
                            else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", !0, !0).appendXtra("", p[1], u[1] - p[1], ",", !0).appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;
                        else if (v = p.match(s)) {
                            if (w = u.match(t), !w || w.length !== v.length) return h;
                            for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), o = z + A.length;
                            h["xs" + h.l] += p.substr(o)
                        } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                        if (-1 !== d.indexOf("=") && h.data) {
                            for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                            h.e = B + h["xs" + m]
                        }
                        return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
                    },
                    wa = 9;
                for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) j["xn" + wa] = 0, j["xs" + wa] = "";
                j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) {
                    var g = this,
                        h = g.l;
                    return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                        s: b + c
                    }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                };
                var xa = function(a, b) {
                        b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                    },
                    ya = S._registerComplexSpecialProp = function(a, b, c) {
                        "object" != typeof b && (b = {
                            parser: c
                        });
                        var d, e, f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b)
                    },
                    za = S._registerPluginProp = function(a) {
                        if (!i[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            ya(a, {
                                parser: function(a, c, d, e, f, g, j) {
                                    var k = h.com.greensock.plugins[b];
                                    return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                j = xa.prototype, j.parseComplex = function(a, b, c, d, e, f) {
                    var g, h, i, j, k, l, m = this.keyword;
                    if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
                        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                        b = h.join(", "), c = i.join(", ")
                    }
                    return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }, j.parse = function(a, b, c, d, f, g, h) {
                    return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
                }, g.registerSpecialProp = function(a, b, c) {
                    ya(a, {
                        parser: function(a, d, e, f, g, h, i) {
                            var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                            return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                        },
                        priority: c
                    })
                }, g.useSVGTransformAttr = !0;
                var Aa, Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ca = Z("transform"),
                    Da = X + "transform",
                    Ea = Z("transformOrigin"),
                    Fa = null !== Z("perspective"),
                    Ga = S.Transform = function() {
                        this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1
                    },
                    Ha = _gsScope.SVGElement,
                    Ia = function(a, b, c) {
                        var d, e = O.createElementNS("http://www.w3.org/2000/svg", a),
                            f = /([a-z])([A-Z])/g;
                        for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                        return b.appendChild(e), e
                    },
                    Ja = O.documentElement || {},
                    Ka = function() {
                        var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome;
                        return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d
                    }(),
                    La = function(a, b, c, d, e, f) {
                        var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
                            w = Qa(a, !0);
                        v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
                            x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                            y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
                    },
                    Ma = function(a) {
                        var b, c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            d = this.parentNode,
                            e = this.nextSibling,
                            f = this.style.cssText;
                        if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
                            b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma
                        } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
                        return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b
                    },
                    Na = function(a) {
                        try {
                            return a.getBBox()
                        } catch (b) {
                            return Ma.call(a, !0)
                        }
                    },
                    Oa = function(a) {
                        return !(!Ha || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Na(a))
                    },
                    Pa = [1, 0, 0, 1, 0, 0],
                    Qa = function(a, b) {
                        var c, d, e, f, g, h, i = a._gsTransform || new Ga,
                            j = 1e5,
                            k = a.style;
                        if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, !Ca || !(h = !$(a) || "none" === $(a).display) && a.parentNode || (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Pa;
                        for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
                        return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                    },
                    Ra = S.getTransform = function(a, c, d, e) {
                        if (a._gsTransform && d && !e) return a._gsTransform;
                        var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga,
                            n = m.scaleX < 0,
                            o = 2e-5,
                            p = 1e5,
                            q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                            r = parseFloat(g.defaultTransformPerspective) || 0;
                        if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) {
                            if (16 === f.length) {
                                var s, t, u, v, w, x = f[0],
                                    y = f[1],
                                    z = f[2],
                                    A = f[3],
                                    B = f[4],
                                    C = f[5],
                                    D = f[6],
                                    E = f[7],
                                    F = f[8],
                                    G = f[9],
                                    H = f[10],
                                    I = f[12],
                                    J = f[13],
                                    K = f[14],
                                    M = f[11],
                                    N = Math.atan2(D, H);
                                m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                            } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                                var O = f.length >= 6,
                                    P = O ? f[0] : 1,
                                    Q = f[1] || 0,
                                    R = f[2] || 0,
                                    S = O ? f[3] : 1;
                                m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                            }
                            Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;
                            for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
                        }
                        return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function() {
                            Va(a.style, Ca)
                        }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function() {
                            a.removeAttribute("transform")
                        }))), m
                    },
                    Sa = function(a) {
                        var b, c, d = this.data,
                            e = -d.rotation * K,
                            f = e + d.skewX * K,
                            g = 1e5,
                            h = (Math.cos(e) * d.scaleX * g | 0) / g,
                            i = (Math.sin(e) * d.scaleX * g | 0) / g,
                            j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                            k = (Math.cos(f) * d.scaleY * g | 0) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                            var n, o, q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                u = d.x + q * d.xPercent / 100,
                                v = d.y + r * d.yPercent / 100;
                            if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                                var y, z, A, B = 8 > p ? 1 : -1;
                                for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px"
                            }
                        }
                    },
                    Ta = S.set3DTransformRatio = S.setTransformRatio = function(a) {
                        var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                            A = this.t.style,
                            B = z.rotation,
                            C = z.rotationX,
                            D = z.rotationY,
                            E = z.scaleX,
                            F = z.scaleY,
                            G = z.scaleZ,
                            H = z.x,
                            I = z.y,
                            J = z.z,
                            L = z.svg,
                            M = z.perspective,
                            N = z.force3D,
                            O = z.skewY,
                            P = z.skewX;
                        if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void(B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
                        if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
                        else {
                            if (!(D || C || 1 !== G || M || L)) return void(A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                            c = g = 1, d = f = 0
                        }
                        k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u
                    };
                j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(a, b, c, d, f, h, i) {
                        if (d._lastParsedTransform === i) return f;
                        d._lastParsedTransform = i;
                        var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                        "function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));
                        var l, m, n, o, p, s, t, u, v, w = a._gsTransform,
                            x = a.style,
                            y = 1e-6,
                            z = Ba.length,
                            A = i,
                            B = {},
                            C = "transformOrigin",
                            D = Ra(a, e, !0, A.parseTransform),
                            E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
                        if (D.skewType = A.skewType || D.skewType || g.defaultSkewType, d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", O.body.appendChild(Q), l = Ra(Q, null, !1), "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
                        else if ("object" == typeof A) {
                            if (l = {
                                    scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
                                    scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
                                    scaleZ: ja(A.scaleZ, D.scaleZ),
                                    x: ja(A.x, D.x),
                                    y: ja(A.y, D.y),
                                    z: ja(A.z, D.z),
                                    xPercent: ja(A.xPercent, D.xPercent),
                                    yPercent: ja(A.yPercent, D.yPercent),
                                    perspective: ja(A.transformPerspective, D.perspective)
                                }, p = A.directionalRotation, null != p)
                                if ("object" == typeof p)
                                    for (m in p) A[m] = p[m];
                                else A.rotation = p;
                            "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY)
                        }
                        for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                        return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f
                    },
                    prefix: !0
                }), ya("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ya("borderRadius", {
                    defaultValue: "0px",
                    parser: function(a, b, c, f, g, h) {
                        b = this.format(b);
                        var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            z = a.style;
                        for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                        return g
                    },
                    prefix: !0,
                    formatter: qa("0px 0px 0px 0px", !1, !0)
                }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(a, b, c, d, f, g) {
                        return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
                    },
                    prefix: !0,
                    formatter: qa("0px 0px", !1, !0)
                }), ya("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(a, b, c, d, f, g) {
                        var h, i, j, k, l, m, n = "background-position",
                            o = e || $(a, null),
                            q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                            r = this.format(b);
                        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
                            for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                            q = h.join(" ")
                        }
                        return this.parseComplex(a.style, q, r, f, g)
                    },
                    formatter: ha
                }), ya("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(a) {
                        return a += "", ha(-1 === a.indexOf(" ") ? a + " " + a : a)
                    }
                }), ya("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ya("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ya("transformStyle", {
                    prefix: !0
                }), ya("backfaceVisibility", {
                    prefix: !0
                }), ya("userSelect", {
                    prefix: !0
                }), ya("margin", {
                    parser: ra("marginTop,marginRight,marginBottom,marginLeft")
                }), ya("padding", {
                    parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ya("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(a, b, c, d, f, g) {
                        var h, i, j;
                        return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                    }
                }), ya("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), ya("autoRound,strictUnits", {
                    parser: function(a, b, c, d, e) {
                        return e
                    }
                }), ya("border", {
                    defaultValue: "0px solid #000",
                    parser: function(a, b, c, d, f, g) {
                        var h = _(a, "borderTopWidth", e, !1, "0px"),
                            i = this.format(b).split(" "),
                            j = i[0].replace(w, "");
                        return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                    },
                    color: !0,
                    formatter: function(a) {
                        var b = a.split(" ");
                        return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
                    }
                }), ya("borderWidth", {
                    parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), ya("float,cssFloat,styleFloat", {
                    parser: function(a, b, c, d, e, f) {
                        var g = a.style,
                            h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                        return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
                    }
                });
                var Ua = function(a) {
                    var b, c = this.t,
                        d = c.filter || _(this.data, "filter") || "",
                        e = this.s + this.c * a | 0;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
                };
                ya("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(a, b, c, d, f, g) {
                        var h = parseFloat(_(a, "opacity", e, !1, "1")),
                            i = a.style,
                            j = "autoAlpha" === c;
                        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                    }
                });
                var Va = function(a, b) {
                        b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
                    },
                    Wa = function(a) {
                        if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                            this.t.setAttribute("class", 0 === a ? this.b : this.e);
                            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                ya("className", {
                    parser: function(a, b, d, f, g, h, i) {
                        var j, k, l, m, n, o = a.getAttribute("class") || "",
                            p = a.style.cssText;
                        if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
                            for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                            l.setRatio(1)
                        }
                        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
                    }
                });
                var Xa = function(a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var b, c, d, e, f, g = this.t.style,
                            h = i.transform.parse;
                        if ("all" === this.e) g.cssText = "", e = !0;
                        else
                            for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
                        e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (ya("clearProps", {
                        parser: function(a, b, d, e, f) {
                            return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                        }
                    }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) za(j[wa]);
                j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h, j) {
                    if (!a.nodeType) return !1;
                    this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;
                    var n, p, s, t, u, v, w, x, z, A = a.style;
                    if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
                        for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
                        x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop()
                    }
                    if (c) {
                        for (; p;) {
                            for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
                            (p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v
                        }
                        this._firstPT = t
                    }
                    return !0
                }, j.parse = function(a, b, c, f) {
                    var g, h, j, l, m, n, o, p, s, t, u = a.style;
                    for (g in b) {
                        if (n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g]) c = h.parse(a, n, g, this, c, f, b);
                        else {
                            if ("--" === g.substr(0, 2)) {
                                this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
                                continue
                            }
                            m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))
                        }
                        f && c && !c.plugin && (c.plugin = f)
                    }
                    return c
                }, j.setRatio = function(a) {
                    var b, c, d, e = this._firstPT,
                        f = 1e-6;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; e;) {
                                if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
                                    if (1 === e.type)
                                        if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                else e.t[e.p] = b + e.xs0;
                                e = e._next
                            } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                        else
                            for (; e;) {
                                if (2 !== e.type)
                                    if (e.r && -1 !== e.type)
                                        if (b = Math.round(e.s + e.c), e.type) {
                                            if (1 === e.type) {
                                                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c
                                            }
                                        } else e.t[e.p] = b + e.xs0;
                                else e.t[e.p] = e.e;
                                else e.setRatio(a);
                                e = e._next
                            }
                }, j._enableTransforms = function(a) {
                    this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3
                };
                var Ya = function(a) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                j._addLazySet = function(a, b, c) {
                    var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
                    d.e = c, d.setRatio = Ya, d.data = this
                }, j._linkCSSP = function(a, b, c, d) {
                    return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
                }, j._mod = function(a) {
                    for (var b = this._firstPT; b;) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next
                }, j._kill = function(b) {
                    var c, d, e, f = b;
                    if (b.autoAlpha || b.alpha) {
                        f = {};
                        for (d in b) f[d] = b[d];
                        f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                    }
                    for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
                    return a.prototype._kill.call(this, f)
                };
                var Za = function(a, b, c) {
                    var d, e, f, g;
                    if (a.slice)
                        for (e = a.length; --e > -1;) Za(a[e], b, c);
                    else
                        for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c)
                };
                return g.cascadeTo = function(a, c, d) {
                    var e, f, g, h, i = b.to(a, c, d),
                        j = [i],
                        k = [],
                        l = [],
                        m = [],
                        n = b._internals.reservedProps;
                    for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                        if (f = da(m[e], k[e], l[e]), f.firstMPT) {
                            f = f.difs;
                            for (g in d) n[g] && (f[g] = d[g]);
                            h = {};
                            for (g in f) h[g] = k[e][g];
                            j.push(b.fromTo(m[e], c, h, f))
                        }
                    return j
                }, a.activate([g]), g
            }, !0),
            function() {
                var a = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(a, b, c) {
                            return this._tween = c, !0
                        }
                    }),
                    b = function(a) {
                        for (; a;) a.f || a.blob || (a.m = Math.round), a = a._next
                    },
                    c = a.prototype;
                c._onInitAllProps = function() {
                    for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1;) h[f[g]] = Math.round;
                    for (g = f.length; --g > -1;)
                        for (a = f[g], c = e._firstPT; c;) d = c._next, c.pg ? c.t._mod(h) : c.n === a && (2 === c.f && c.t ? b(c.t._firstPT) : (this._add(c.t, a, c.s, c.c), d && (d._prev = c._prev), c._prev ? c._prev._next = d : e._firstPT === c && (e._firstPT = d), c._next = c._prev = null, e._propLookup[a] = i)), c = d;
                    return !1
                }, c._add = function(a, b, c, d) {
                    this._addTween(a, b, c, c + d, b, Math.round), this._overwriteProps.push(b)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function(a, b, c, d) {
                        var e, f;
                        if ("function" != typeof a.setAttribute) return !1;
                        for (e in b) f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(a, b, c, d) {
                    "object" != typeof b && (b = {
                        rotation: b
                    }), this.finals = {};
                    var e, f, g, h, i, j, k = b.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (e in b) "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
                    return !0
                },
                set: function(a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
                var b, c, d, e, f = _gsScope.GreenSockGlobals || _gsScope,
                    g = f.com.greensock,
                    h = 2 * Math.PI,
                    i = Math.PI / 2,
                    j = g._class,
                    k = function(b, c) {
                        var d = j("easing." + b, function() {}, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, d
                    },
                    l = a.register || function() {},
                    m = function(a, b, c, d, e) {
                        var f = j("easing." + a, {
                            easeOut: new b,
                            easeIn: new c,
                            easeInOut: new d
                        }, !0);
                        return l(f, a), f
                    },
                    n = function(a, b, c) {
                        this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                    },
                    o = function(b, c) {
                        var d = j("easing." + b, function(a) {
                                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, e.config = function(a) {
                            return new d(a)
                        }, d
                    },
                    p = m("Back", o("BackOut", function(a) {
                        return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                    }), o("BackIn", function(a) {
                        return a * a * ((this._p1 + 1) * a - this._p1)
                    }), o("BackInOut", function(a) {
                        return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                    })),
                    q = j("easing.SlowMo", function(a, b, c) {
                        b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                    }, !0),
                    r = q.prototype = new a;
                return r.constructor = q, r.getRatio = function(a) {
                    var b = a + (.5 - a) * this._p;
                    return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                }, q.ease = new q(.7, .7), r.config = q.config = function(a, b, c) {
                    return new q(a, b, c)
                }, b = j("easing.SteppedEase", function(a, b) {
                    a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0
                }, !0), r = b.prototype = new a, r.constructor = b, r.getRatio = function(a) {
                    return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1
                }, r.config = b.config = function(a, c) {
                    return new b(a, c)
                }, c = j("easing.ExpoScaleEase", function(a, b, c) {
                    this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c
                }, !0), r = c.prototype = new a, r.constructor = c, r.getRatio = function(a) {
                    return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2
                }, r.config = c.config = function(a, b, d) {
                    return new c(a, b, d)
                }, d = j("easing.RoughEase", function(b) {
                    b = b || {};
                    for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --m > -1;) c = o ? Math.random() : 1 / l * m, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                        x: c,
                        y: d
                    };
                    for (j.sort(function(a, b) {
                            return a.x - b.x
                        }), h = new n(1, 1, null), m = l; --m > -1;) g = j[m], h = new n(g.x, g.y, h);
                    this._prev = new n(0, 0, 0 !== h.t ? h : h.next)
                }, !0), r = d.prototype = new a, r.constructor = d, r.getRatio = function(a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;) b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && a <= b.t;) b = b.prev;
                    return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                }, r.config = function(a) {
                    return new d(a)
                }, d.ease = new d, m("Bounce", k("BounceOut", function(a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }), k("BounceIn", function(a) {
                    return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }), k("BounceInOut", function(a) {
                    var b = .5 > a;
                    return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                })), m("Circ", k("CircOut", function(a) {
                    return Math.sqrt(1 - (a -= 1) * a)
                }), k("CircIn", function(a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }), k("CircInOut", function(a) {
                    return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                })), e = function(b, c, d) {
                    var e = j("easing." + b, function(a, b) {
                            this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), this._p2 = h / this._p2
                        }, !0),
                        f = e.prototype = new a;
                    return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                        return new e(a, b)
                    }, e
                }, m("Elastic", e("ElasticOut", function(a) {
                    return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
                }, .3), e("ElasticIn", function(a) {
                    return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
                }, .3), e("ElasticInOut", function(a) {
                    return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
                }, .45)), m("Expo", k("ExpoOut", function(a) {
                    return 1 - Math.pow(2, -10 * a)
                }), k("ExpoIn", function(a) {
                    return Math.pow(2, 10 * (a - 1)) - .001
                }), k("ExpoInOut", function(a) {
                    return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                })), m("Sine", k("SineOut", function(a) {
                    return Math.sin(a * i)
                }), k("SineIn", function(a) {
                    return -Math.cos(a * i) + 1
                }), k("SineInOut", function(a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                })), j("easing.EaseLookup", {
                    find: function(b) {
                        return a.map[b]
                    }
                }, !0), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a, b) {
        "use strict";
        var c = {},
            d = a.document,
            e = a.GreenSockGlobals = a.GreenSockGlobals || a;
        if (!e.TweenLite) {
            var f, g, h, i, j, k = function(a) {
                    var b, c = a.split("."),
                        d = e;
                    for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                    return d
                },
                l = k("com.greensock"),
                m = 1e-10,
                n = function(a) {
                    var b, c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c
                },
                o = function() {},
                p = function() {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function(c) {
                        return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                    }
                }(),
                q = {},
                r = function(d, f, g, h) {
                    this.sc = q[d] ? q[d].sc : [], q[d] = this, this.gsClass = null, this.func = g;
                    var i = [];
                    this.check = function(j) {
                        for (var l, m, n, o, p = f.length, s = p; --p > -1;)(l = q[f[p]] || new r(f[p], [])).gsClass ? (i[p] = l.gsClass, s--) : j && l.sc.push(this);
                        if (0 === s && g) {
                            if (m = ("com.greensock." + d).split("."), n = m.pop(), o = k(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
                                if (e[n] = c[n] = o, "undefined" != typeof module && module.exports)
                                    if (d === b) {
                                        module.exports = c[b] = o;
                                        for (p in c) o[p] = c[p]
                                    } else c[b] && (c[b][n] = o);
                            else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                                return o
                            });
                            for (p = 0; p < this.sc.length; p++) this.sc[p].check()
                        }
                    }, this.check(!0)
                },
                s = a._gsDefine = function(a, b, c, d) {
                    return new r(a, b, c, d)
                },
                t = l._class = function(a, b, c) {
                    return b = b || function() {}, s(a, [], function() {
                        return b
                    }, c), b
                };
            s.globals = e;
            var u = [0, 0, 1, 1],
                v = t("easing.Ease", function(a, b, c, d) {
                    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? u.concat(b) : u
                }, !0),
                w = v.map = {},
                x = v.register = function(a, b, c, d) {
                    for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                        for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) h = k[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                };
            for (h = v.prototype, h._calcEnd = !1, h.getRatio = function(a) {
                    if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                    var b = this._type,
                        c = this._power,
                        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                    return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
                }, f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], g = f.length; --g > -1;) h = f[g] + ",Power" + g, x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
            w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
            var y = t("events.EventDispatcher", function(a) {
                this._listeners = {}, this._eventTarget = a || this
            });
            h = y.prototype, h.addEventListener = function(a, b, c, d, e) {
                e = e || 0;
                var f, g, h = this._listeners[a],
                    k = 0;
                for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
                h.splice(k, 0, {
                    c: b,
                    s: c,
                    up: d,
                    pr: e
                })
            }, h.removeEventListener = function(a, b) {
                var c, d = this._listeners[a];
                if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b) return void d.splice(c, 1)
            }, h.dispatchEvent = function(a) {
                var b, c, d, e = this._listeners[a];
                if (e)
                    for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c))
            };
            var z = a.requestAnimationFrame,
                A = a.cancelAnimationFrame,
                B = Date.now || function() {
                    return (new Date).getTime()
                },
                C = B();
            for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;) z = a[f[g] + "RequestAnimationFrame"], A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
            t("Ticker", function(a, b) {
                var c, e, f, g, h, k = this,
                    l = B(),
                    n = b !== !1 && z ? "auto" : !1,
                    p = 500,
                    q = 33,
                    r = "tick",
                    s = function(a) {
                        var b, d, i = B() - C;
                        i > p && (l += i - q), C += i, k.time = (C - l) / 1e3, b = k.time - h, (!c || b > 0 || a === !0) && (k.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && k.dispatchEvent(r)
                    };
                y.call(k), k.time = k.frame = 0, k.tick = function() {
                    s(!0)
                }, k.lagSmoothing = function(a, b) {
                    return arguments.length ? (p = a || 1 / m, void(q = Math.min(b, p, 0))) : 1 / m > p
                }, k.sleep = function() {
                    null != f && (n && A ? A(f) : clearTimeout(f), e = o, f = null, k === i && (j = !1))
                }, k.wake = function(a) {
                    null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5), e = 0 === c ? o : n && z ? z : function(a) {
                        return setTimeout(a, 1e3 * (h - k.time) + 1 | 0)
                    }, k === i && (j = !0), s(2)
                }, k.fps = function(a) {
                    return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void k.wake()) : c
                }, k.useRAF = function(a) {
                    return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n
                }, k.fps(a), setTimeout(function() {
                    "auto" === n && k.frame < 5 && "hidden" !== (d || {}).visibilityState && k.useRAF(!1)
                }, 1500)
            }), h = l.Ticker.prototype = new l.events.EventDispatcher, h.constructor = l.Ticker;
            var D = t("core.Animation", function(a, b) {
                if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, X) {
                    j || i.wake();
                    var c = this.vars.useFrames ? W : X;
                    c.add(this, c._time), this.vars.paused && this.paused(!0)
                }
            });
            i = D.ticker = new l.Ticker, h = D.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
            var E = function() {
                j && B() - C > 2e3 && ("hidden" !== (d || {}).visibilityState || !i.lagSmoothing()) && i.wake();
                var a = setTimeout(E, 2e3);
                a.unref && a.unref()
            };
            E(), h.play = function(a, b) {
                return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
            }, h.pause = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!0)
            }, h.resume = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!1)
            }, h.seek = function(a, b) {
                return this.totalTime(Number(a), b !== !1)
            }, h.restart = function(a, b) {
                return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
            }, h.reverse = function(a, b) {
                return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
            }, h.render = function(a, b, c) {}, h.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, h.isActive = function() {
                var a, b = this._timeline,
                    c = this._startTime;
                return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7
            }, h._enabled = function(a, b) {
                return j || i.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
            }, h._kill = function(a, b) {
                return this._enabled(!1, !1)
            }, h.kill = function(a, b) {
                return this._kill(a, b), this
            }, h._uncache = function(a) {
                for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                return this
            }, h._swapSelfInParams = function(a) {
                for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                return c
            }, h._callback = function(a) {
                var b = this.vars,
                    c = b[a],
                    d = b[a + "Params"],
                    e = b[a + "Scope"] || b.callbackScope || this,
                    f = d ? d.length : 0;
                switch (f) {
                    case 0:
                        c.call(e);
                        break;
                    case 1:
                        c.call(e, d[0]);
                        break;
                    case 2:
                        c.call(e, d[0], d[1]);
                        break;
                    default:
                        c.apply(e, d)
                }
            }, h.eventCallback = function(a, b, c, d) {
                if ("on" === (a || "").substr(0, 2)) {
                    var e = this.vars;
                    if (1 === arguments.length) return e[a];
                    null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                }
                return this
            }, h.delay = function(a) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
            }, h.duration = function(a) {
                return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, h.totalDuration = function(a) {
                return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
            }, h.time = function(a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
            }, h.totalTime = function(a, b, c) {
                if (j || i.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var d = this._totalDuration,
                            e = this._timeline;
                        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                            for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Z(), this.render(a, b, !1), J.length && Z())
                }
                return this
            }, h.progress = h.totalProgress = function(a, b) {
                var c = this.duration();
                return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
            }, h.startTime = function(a) {
                return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
            }, h.endTime = function(a) {
                return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
            }, h.timeScale = function(a) {
                if (!arguments.length) return this._timeScale;
                var b, c;
                for (a = a || m, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) c._dirty = !0, c.totalDuration(), c = c.timeline;
                return this
            }, h.reversed = function(a) {
                return arguments.length ? (a != this._reversed && (this._reversed = a,
                    this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, h.paused = function(a) {
                if (!arguments.length) return this._paused;
                var b, c, d = this._timeline;
                return a != this._paused && d && (j || a || i.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
            };
            var F = t("core.SimpleTimeline", function(a) {
                D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            h = F.prototype = new D, h.constructor = F, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function(a, b, c, d) {
                var e, f;
                if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                    for (f = a._startTime; e && e._startTime > f;) e = e._prev;
                return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
            }, h._remove = function(a, b) {
                return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, h.render = function(a, b, c) {
                var d, e = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
            }, h.rawTime = function() {
                return j || i.wake(), this._totalTime
            };
            var G = t("TweenLite", function(b, c, d) {
                    if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw "Cannot tween a null target.";
                    this.target = b = "string" != typeof b ? b : G.selector(b) || b;
                    var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                        i = this.vars.overwrite;
                    if (this._overwrite = i = null == i ? V[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : V[i], (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0])
                        for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(n(f))) : (this._siblings[e] = $(f, this, !1), 1 === i && this._siblings[e].length > 1 && aa(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                    else this._propLookup = {}, this._siblings = $(b, this, !1), 1 === i && this._siblings.length > 1 && aa(b, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -m, this.render(Math.min(0, -this._delay)))
                }, !0),
                H = function(b) {
                    return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
                },
                I = function(a, b) {
                    var c, d = {};
                    for (c in a) U[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!R[c] || R[c] && R[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                    a.css = d
                };
            h = G.prototype = new D, h.constructor = G, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, G.version = "1.20.4", G.defaultEase = h._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = i, G.autoSleep = 120, G.lagSmoothing = function(a, b) {
                i.lagSmoothing(a, b)
            }, G.selector = a.$ || a.jQuery || function(b) {
                var c = a.$ || a.jQuery;
                return c ? (G.selector = c, c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
            };
            var J = [],
                K = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                M = /[\+-]=-?[\.\d]/,
                N = function(a) {
                    for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
                },
                O = function(a, b, c, d) {
                    var e, f, g, h, i, j, k, l = [],
                        m = 0,
                        n = "",
                        o = 0;
                    for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                        _next: l._firstPT,
                        t: l,
                        p: l.length - 1,
                        s: g,
                        c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                        f: 0,
                        m: o && 4 > o ? Math.round : 0
                    }), m += k.length;
                    return n += b.substr(m), n && l.push(n), l.setRatio = N, M.test(b) && (l.end = null), l
                },
                P = function(a, b, c, d, e, f, g, h, i) {
                    "function" == typeof d && (d = d(i || 0, a));
                    var j, k = typeof a[b],
                        l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                        m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
                        n = "string" == typeof d && "=" === d.charAt(1),
                        o = {
                            t: a,
                            p: b,
                            s: m,
                            f: "function" === k,
                            pg: 0,
                            n: e || b,
                            m: f ? "function" == typeof f ? f : Math.round : 0,
                            pr: 0,
                            c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
                        };
                    return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = O(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || G.defaultStringFilter, o), o = {
                        t: j,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: e || b,
                        pr: 0,
                        m: 0
                    }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
                },
                Q = G._internals = {
                    isArray: p,
                    isSelector: H,
                    lazyTweens: J,
                    blobDif: O
                },
                R = G._plugins = {},
                S = Q.tweenLookup = {},
                T = 0,
                U = Q.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                V = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                W = D._rootFramesTimeline = new F,
                X = D._rootTimeline = new F,
                Y = 30,
                Z = Q.lazyRender = function() {
                    var a, b = J.length;
                    for (K = {}; --b > -1;) a = J[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                    J.length = 0
                };
            X._startTime = i.time, W._startTime = i.frame, X._active = W._active = !0, setTimeout(Z, 1), D._updateRoot = G.render = function() {
                var a, b, c;
                if (J.length && Z(), X.render((i.time - X._startTime) * X._timeScale, !1, !1), W.render((i.frame - W._startTime) * W._timeScale, !1, !1), J.length && Z(), i.frame >= Y) {
                    Y = i.frame + (parseInt(G.autoSleep, 10) || 120);
                    for (c in S) {
                        for (b = S[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                        0 === b.length && delete S[c]
                    }
                    if (c = X._first, (!c || c._paused) && G.autoSleep && !W._first && 1 === i._listeners.tick.length) {
                        for (; c && c._paused;) c = c._next;
                        c || i.sleep()
                    }
                }
            }, i.addEventListener("tick", D._updateRoot);
            var $ = function(a, b, c) {
                    var d, e, f = a._gsTweenID;
                    if (S[f || (a._gsTweenID = f = "t" + T++)] || (S[f] = {
                            target: a,
                            tweens: []
                        }), b && (d = S[f].tweens, d[e = d.length] = b, c))
                        for (; --e > -1;) d[e] === b && d.splice(e, 1);
                    return S[f].tweens
                },
                _ = function(a, b, c, d) {
                    var e, f, g = a.vars.onOverwrite;
                    return g && (e = g(a, b, c, d)), g = G.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
                },
                aa = function(a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                            else if (5 === d) break;
                        return g
                    }
                    var j, k = b._startTime + m,
                        l = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || ba(b, 0, o), 0 === ba(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h)));
                    for (f = n; --f > -1;)
                        if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                            if (2 !== d && !_(h, b)) continue;
                            h._enabled(!1, !1) && (g = !0)
                        }
                    return g
                },
                ba = function(a, b, c) {
                    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                        if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                        d = d._timeline
                    }
                    return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m
                };
            h._init = function() {
                var a, b, c, d, e, f, g = this.vars,
                    h = this._overwrittenProps,
                    i = this._duration,
                    j = !!g.immediateRender,
                    k = g.ease;
                if (g.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                    for (d in g.startAt) e[d] = g.startAt[d];
                    if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = G.to(this.target, 0, e), j)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== i) return
                } else if (g.runBackwards && 0 !== i)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (j = !1), c = {};
                        for (d in g) U[d] && "autoCSS" !== d || (c[d] = g[d]);
                        if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = G.to(this.target, 0, c), j) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase : G.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
                if (b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
                    for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                this._onUpdate = g.onUpdate, this._initted = !0
            }, h._initProps = function(b, c, d, e, f) {
                var g, h, i, j, k, l;
                if (null == b) return !1;
                K[b._gsTweenID] && Z(), this.vars.css || b.style && b !== a && b.nodeType && R.css && this.vars.autoCSS !== !1 && I(this.vars, b);
                for (g in this.vars)
                    if (l = this.vars[g], U[g]) l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                    else if (R[g] && (j = new R[g])._onInitTween(b, this.vars[g], this, f)) {
                    for (this._firstPT = k = {
                            _next: this._firstPT,
                            t: j,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: g,
                            pg: 1,
                            pr: j._priority,
                            m: 0
                        }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
                    (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
                } else c[g] = P.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
                return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && aa(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), i)
            }, h.render = function(a, b, c) {
                var d, e, f, g, h = this._time,
                    i = this._duration,
                    j = this._rawPrevTime;
                if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0, j > m && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : m);
                else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : m)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);
                else if (this._totalTime = this._time = a, this._easeType) {
                    var k = a / i,
                        l = this._easeType,
                        n = this._easePower;
                    (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2
                } else this.ratio = this._ease.getRatio(a / i);
                if (this._time !== h || c) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void(this._lazy = [a, b]);
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                    this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0))
                }
            }, h._kill = function(a, b, c) {
                if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
                var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
                if ((p(b) || H(b)) && "number" != typeof b[0])
                    for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
                else {
                    if (this._targets) {
                        for (d = this._targets.length; --d > -1;)
                            if (b === this._targets[d]) {
                                h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                                break
                            }
                    } else {
                        if (b !== this.target) return !1;
                        h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    }
                    if (h) {
                        if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) {
                            for (f in j) h[f] && (l || (l = []), l.push(f));
                            if ((l || !a) && !_(this, c, b, l)) return !1
                        }
                        for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return i
            }, h.invalidate = function() {
                return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this
            }, h._enabled = function(a, b) {
                if (j || i.wake(), a && this._gc) {
                    var c, d = this._targets;
                    if (d)
                        for (c = d.length; --c > -1;) this._siblings[c] = $(d[c], this, !0);
                    else this._siblings = $(this.target, this, !0)
                }
                return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
            }, G.to = function(a, b, c) {
                return new G(a, b, c)
            }, G.from = function(a, b, c) {
                return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c)
            }, G.fromTo = function(a, b, c, d) {
                return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d)
            }, G.delayedCall = function(a, b, c, d, e) {
                return new G(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    callbackScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: e,
                    overwrite: 0
                })
            }, G.set = function(a, b) {
                return new G(a, 0, b)
            }, G.getTweensOf = function(a, b) {
                if (null == a) return [];
                a = "string" != typeof a ? a : G.selector(a) || a;
                var c, d, e, f;
                if ((p(a) || H(a)) && "number" != typeof a[0]) {
                    for (c = a.length, d = []; --c > -1;) d = d.concat(G.getTweensOf(a[c], b));
                    for (c = d.length; --c > -1;)
                        for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                } else if (a._gsTweenID)
                    for (d = $(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                return d || []
            }, G.killTweensOf = G.killDelayedCallsTo = function(a, b, c) {
                "object" == typeof b && (c = b, b = !1);
                for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
            };
            var ca = t("plugins.TweenPlugin", function(a, b) {
                this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ca.prototype
            }, !0);
            if (h = ca.prototype, ca.version = "1.19.0", ca.API = 2, h._firstPT = null, h._addTween = P, h.setRatio = N, h._kill = function(a) {
                    var b, c = this._overwriteProps,
                        d = this._firstPT;
                    if (null != a[this._propName]) this._overwriteProps = [];
                    else
                        for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                    for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                    return !1
                }, h._mod = h._roundProps = function(a) {
                    for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
                }, G._onPluginEvent = function(a, b) {
                    var c, d, e, f, g, h = b._firstPT;
                    if ("_onInitAllProps" === a) {
                        for (; h;) {
                            for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                            (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                        }
                        h = b._firstPT = e
                    }
                    for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                    return c
                }, ca.activate = function(a) {
                    for (var b = a.length; --b > -1;) a[b].API === ca.API && (R[(new a[b])._propName] = a[b]);
                    return !0
                }, s.plugin = function(a) {
                    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                    var b, c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                            ca.call(this, c, d), this._overwriteProps = e || []
                        }, a.global === !0),
                        h = g.prototype = new ca(c);
                    h.constructor = g, g.API = a.API;
                    for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                    return g.version = a.version, ca.activate([g]), g
                }, f = a._gsQueue) {
                for (g = 0; g < f.length; g++) f[g]();
                for (h in q) q[h].func || a.console.log("GSAP encountered missing dependency: " + h)
            }
            j = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");


//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
    "use strict";

    function a() {
        return sd.apply(null, arguments)
    }

    function b(a) {
        sd = a
    }

    function c(a) {
        return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return null != a && "[object Object]" === Object.prototype.toString.call(a)
    }

    function e(a) {
        var b;
        for (b in a) return !1;
        return !0
    }

    function f(a) {
        return void 0 === a
    }

    function g(a) {
        return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a)
    }

    function h(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function i(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function j(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function k(a, b) {
        for (var c in b) j(b, c) && (a[c] = b[c]);
        return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function l(a, b, c, d) {
        return sb(a, b, c, d, !0).utc()
    }

    function m() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }

    function n(a) {
        return null == a._pf && (a._pf = m()), a._pf
    }

    function o(a) {
        if (null == a._isValid) {
            var b = n(a),
                c = ud.call(b.parsedDateParts, function(a) {
                    return null != a
                }),
                d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
            if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;
            a._isValid = d
        }
        return a._isValid
    }

    function p(a) {
        var b = l(NaN);
        return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b
    }

    function q(a, b) {
        var c, d, e;
        if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), vd.length > 0)
            for (c = 0; c < vd.length; c++) d = vd[c], e = b[d], f(e) || (a[d] = e);
        return a
    }

    function r(b) {
        q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), wd === !1 && (wd = !0, a.updateOffset(this), wd = !1)
    }

    function s(a) {
        return a instanceof r || null != a && null != a._isAMomentObject
    }

    function t(a) {
        return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
    }

    function u(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = t(b)), c
    }

    function v(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
        return g + f
    }

    function w(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function x(b, c) {
        var d = !0;
        return k(function() {
            if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
                for (var e, f = [], g = 0; g < arguments.length; g++) {
                    if (e = "", "object" == typeof arguments[g]) {
                        e += "\n[" + g + "] ";
                        for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[g];
                    f.push(e)
                }
                w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack), d = !1
            }
            return c.apply(this, arguments)
        }, c)
    }

    function y(b, c) {
        null != a.deprecationHandler && a.deprecationHandler(b, c), xd[b] || (w(c), xd[b] = !0)
    }

    function z(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
    }

    function A(a) {
        var b, c;
        for (c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
        this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function B(a, b) {
        var c, e = k({}, a);
        for (c in b) j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
        for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
        return e
    }

    function C(a) {
        null != a && this.set(a)
    }

    function D(a, b, c) {
        var d = this._calendar[a] || this._calendar.sameElse;
        return z(d) ? d.call(b, c) : d
    }

    function E(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }

    function F() {
        return this._invalidDate
    }

    function G(a) {
        return this._ordinal.replace("%d", a)
    }

    function H(a, b, c, d) {
        var e = this._relativeTime[c];
        return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function I(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return z(c) ? c(b) : c.replace(/%s/i, b)
    }

    function J(a, b) {
        var c = a.toLowerCase();
        Hd[c] = Hd[c + "s"] = Hd[b] = a
    }

    function K(a) {
        return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0
    }

    function L(a) {
        var b, c, d = {};
        for (c in a) j(a, c) && (b = K(c), b && (d[b] = a[c]));
        return d
    }

    function M(a, b) {
        Id[a] = b
    }

    function N(a) {
        var b = [];
        for (var c in a) b.push({
            unit: c,
            priority: Id[c]
        });
        return b.sort(function(a, b) {
            return a.priority - b.priority
        }), b
    }

    function O(b, c) {
        return function(d) {
            return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b)
        }
    }

    function P(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
    }

    function Q(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function R(a) {
        return a = K(a), z(this[a]) ? this[a]() : this
    }

    function S(a, b) {
        if ("object" == typeof a) {
            a = L(a);
            for (var c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit])
        } else if (a = K(a), z(this[a])) return this[a](b);
        return this
    }

    function T(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }

    function U(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]()
        }), a && (Md[a] = e), b && (Md[b[0]] = function() {
            return T(e.apply(this, arguments), b[1], b[2])
        }), c && (Md[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function V(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function W(a) {
        var b, c, d = a.match(Jd);
        for (b = 0, c = d.length; b < c; b++) Md[d[b]] ? d[b] = Md[d[b]] : d[b] = V(d[b]);
        return function(b) {
            var e, f = "";
            for (e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e];
            return f
        }
    }

    function X(a, b) {
        return a.isValid() ? (b = Y(b, a.localeData()), Ld[b] = Ld[b] || W(b), Ld[b](a)) : a.localeData().invalidDate()
    }

    function Y(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Kd.lastIndex = 0; d >= 0 && Kd.test(a);) a = a.replace(Kd, c), Kd.lastIndex = 0, d -= 1;
        return a
    }

    function Z(a, b, c) {
        ce[a] = z(b) ? b : function(a, d) {
            return a && c ? c : b
        }
    }

    function $(a, b) {
        return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a))
    }

    function _(a) {
        return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        }))
    }

    function aa(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function ba(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), g(b) && (d = function(a, c) {
                c[b] = u(a)
            }), c = 0; c < a.length; c++) de[a[c]] = d
    }

    function ca(a, b) {
        ba(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function da(a, b, c) {
        null != b && j(de, a) && de[a](b, c._a, c, a)
    }

    function ea(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function fa(a, b) {
        return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || oe).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone
    }

    function ga(a, b) {
        return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[oe.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }

    function ha(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
        return c ? "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null))
    }

    function ia(a, b, c) {
        var d, e, f;
        if (this._monthsParseExact) return ha.call(this, a, b, c);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
            if (e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }

    function ja(a, b) {
        var c;
        if (!a.isValid()) return a;
        if ("string" == typeof b)
            if (/^\d+$/.test(b)) b = u(b);
            else if (b = a.localeData().monthsParse(b), !g(b)) return a;
        return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
    }

    function ka(b) {
        return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month")
    }

    function la() {
        return ea(this.year(), this.month())
    }

    function ma(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function na(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = se), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
    }

    function oa() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d = [],
            e = [],
            f = [];
        for (b = 0; b < 12; b++) c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) d[b] = aa(d[b]), e[b] = aa(e[b]);
        for (b = 0; b < 24; b++) f[b] = aa(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
    }

    function pa(a) {
        return qa(a) ? 366 : 365
    }

    function qa(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function ra() {
        return qa(this.year())
    }

    function sa(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    }

    function ta(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
    }

    function ua(a, b, c) {
        var d = 7 + b - c,
            e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1
    }

    function va(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7,
            i = ua(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;
        return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), {
            year: f,
            dayOfYear: g
        }
    }

    function wa(a, b, c) {
        var d, e, f = ua(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        }
    }

    function xa(a, b, c) {
        var d = ua(a, b, c),
            e = ua(a + 1, b, c);
        return (pa(a) - d + e) / 7
    }

    function ya(a) {
        return wa(a, this._week.dow, this._week.doy).week
    }

    function za() {
        return this._week.dow
    }

    function Aa() {
        return this._week.doy
    }

    function Ba(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Ca(a) {
        var b = wa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Da(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Ea(a, b) {
        return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
    }

    function Fa(a, b) {
        return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }

    function Ga(a) {
        return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
    }

    function Ha(a) {
        return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
    }

    function Ia(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
        return c ? "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)))
    }

    function Ja(a, b, c) {
        var d, e, f;
        if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
            if (e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d
        }
    }

    function Ka(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function La(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function Ma(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        if (null != a) {
            var b = Ea(a, this.localeData());
            return this.day(this.day() % 7 ? b : b - 7)
        }
        return this.day() || 7
    }

    function Na(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function Oa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function Pa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function Qa() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d, e, f, g = [],
            h = [],
            i = [],
            j = [];
        for (b = 0; b < 7; b++) c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
        for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
        this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
    }

    function Ra() {
        return this.hours() % 12 || 12
    }

    function Sa() {
        return this.hours() || 24
    }

    function Ta(a, b) {
        U(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }

    function Ua(a, b) {
        return b._meridiemParse
    }

    function Va(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function Wa(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function Xa(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function Ya(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = Za(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && v(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }

    function Za(a) {
        var b = null;
        if (!Fe[a] && "undefined" != typeof module && module && module.exports) try {
            b = Be._abbr, require("./locale/" + a), $a(b)
        } catch (a) {}
        return Fe[a]
    }

    function $a(a, b) {
        var c;
        return a && (c = f(b) ? bb(a) : _a(a, b), c && (Be = c)), Be._abbr
    }

    function _a(a, b) {
        if (null !== b) {
            var c = Ee;
            if (b.abbr = a, null != Fe[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Fe[a]._config;
            else if (null != b.parentLocale) {
                if (null == Fe[b.parentLocale]) return Ge[b.parentLocale] || (Ge[b.parentLocale] = []), Ge[b.parentLocale].push({
                    name: a,
                    config: b
                }), null;
                c = Fe[b.parentLocale]._config
            }
            return Fe[a] = new C(B(c, b)), Ge[a] && Ge[a].forEach(function(a) {
                _a(a.name, a.config)
            }), $a(a), Fe[a]
        }
        return delete Fe[a], null
    }

    function ab(a, b) {
        if (null != b) {
            var c, d = Ee;
            null != Fe[a] && (d = Fe[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Fe[a], Fe[a] = c, $a(a)
        } else null != Fe[a] && (null != Fe[a].parentLocale ? Fe[a] = Fe[a].parentLocale : null != Fe[a] && delete Fe[a]);
        return Fe[a]
    }

    function bb(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Be;
        if (!c(a)) {
            if (b = Za(a)) return b;
            a = [a]
        }
        return Ya(a)
    }

    function cb() {
        return Ad(Fe)
    }

    function db(a) {
        var b, c = a._a;
        return c && n(a).overflow === -2 && (b = c[fe] < 0 || c[fe] > 11 ? fe : c[ge] < 1 || c[ge] > ea(c[ee], c[fe]) ? ge : c[he] < 0 || c[he] > 24 || 24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]) ? he : c[ie] < 0 || c[ie] > 59 ? ie : c[je] < 0 || c[je] > 59 ? je : c[ke] < 0 || c[ke] > 999 ? ke : -1, n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge), n(a)._overflowWeeks && b === -1 && (b = le), n(a)._overflowWeekday && b === -1 && (b = me), n(a).overflow = b), a
    }

    function eb(a) {
        var b, c, d, e, f, g, h = a._i,
            i = He.exec(h) || Ie.exec(h);
        if (i) {
            for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++)
                if (Ke[b][1].exec(i[1])) {
                    e = Ke[b][0], d = Ke[b][2] !== !1;
                    break
                }
            if (null == e) return void(a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Le.length; b < c; b++)
                    if (Le[b][1].exec(i[3])) {
                        f = (i[2] || " ") + Le[b][0];
                        break
                    }
                if (null == f) return void(a._isValid = !1)
            }
            if (!d && null != f) return void(a._isValid = !1);
            if (i[4]) {
                if (!Je.exec(i[4])) return void(a._isValid = !1);
                g = "Z"
            }
            a._f = e + (f || "") + (g || ""), lb(a)
        } else a._isValid = !1
    }

    function fb(a) {
        var b, c, d, e, f, g, h, i, j = {
                " GMT": " +0000",
                " EDT": " -0400",
                " EST": " -0500",
                " CDT": " -0500",
                " CST": " -0600",
                " MDT": " -0600",
                " MST": " -0700",
                " PDT": " -0700",
                " PST": " -0800"
            },
            k = "YXWVUTSRQPONZABCDEFGHIKLM";
        if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Ne.exec(b)) {
            if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
                var l = new Date(c[2]),
                    m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];
                if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void(a._isValid = !1)
            }
            switch (c[5].length) {
                case 2:
                    0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");
                    break;
                case 4:
                    h = j[c[5]];
                    break;
                default:
                    h = j[" GMT"]
            }
            c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0
        } else a._isValid = !1
    }

    function gb(b) {
        var c = Me.exec(b._i);
        return null !== c ? void(b._d = new Date(+c[1])) : (eb(b), void(b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))))
    }

    function hb(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function ib(b) {
        var c = new Date(a.now());
        return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
    }

    function jb(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = ib(a), a._w && null == a._a[ge] && null == a._a[fe] && kb(a), null != a._dayOfYear && (e = hb(a._a[ee], d[ee]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[fe] = c.getUTCMonth(), a._a[ge] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (; b < 7; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[he] && 0 === a._a[ie] && 0 === a._a[je] && 0 === a._a[ke] && (a._nextDay = !0, a._a[he] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[he] = 24)
        }
    }

    function kb(a) {
        var b, c, d, e, f, g, h, i;
        if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0);
        else {
            f = a._locale._week.dow, g = a._locale._week.doy;
            var j = wa(tb(), f, g);
            c = hb(b.gg, a._a[ee], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f
        }
        d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[ee] = h.year, a._dayOfYear = h.dayOfYear)
    }

    function lb(b) {
        if (b._f === a.ISO_8601) return void eb(b);
        if (b._f === a.RFC_2822) return void fb(b);
        b._a = [], n(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            j = 0;
        for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Md[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
        n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[he] <= 12 && n(b).bigHour === !0 && b._a[he] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[he] = mb(b._locale, b._a[he], b._meridiem), jb(b), db(b)
    }

    function mb(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function nb(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return n(a).invalidFormat = !0, void(a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b));
        k(a, c || b)
    }

    function ob(a) {
        if (!a._d) {
            var b = L(a._i);
            a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
                return a && parseInt(a, 10)
            }), jb(a)
        }
    }

    function pb(a) {
        var b = new r(db(qb(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function qb(a) {
        var b = a._i,
            d = a._f;
        return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a))
    }

    function rb(b) {
        var e = b._i;
        f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function(a) {
            return parseInt(a, 10)
        }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b)
    }

    function sb(a, b, f, g, h) {
        var i = {};
        return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i)
    }

    function tb(a, b, c, d) {
        return sb(a, b, c, d, !1)
    }

    function ub(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();
        for (d = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](d) || (d = b[e]);
        return d
    }

    function vb() {
        var a = [].slice.call(arguments, 0);
        return ub("isBefore", a)
    }

    function wb() {
        var a = [].slice.call(arguments, 0);
        return ub("isAfter", a)
    }

    function xb(a) {
        for (var b in a)
            if (Re.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
        for (var c = !1, d = 0; d < Re.length; ++d)
            if (a[Re[d]]) {
                if (c) return !1;
                parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0)
            }
        return !0
    }

    function yb() {
        return this._isValid
    }

    function zb() {
        return Sb(NaN)
    }

    function Ab(a) {
        var b = L(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble()
    }

    function Bb(a) {
        return a instanceof Ab
    }

    function Cb(a) {
        return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
    }

    function Db(a, b) {
        U(a, 0, 0, function() {
            var a = this.utcOffset(),
                c = "+";
            return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
        })
    }

    function Eb(a, b) {
        var c = (b || "").match(a);
        if (null === c) return null;
        var d = c[c.length - 1] || [],
            e = (d + "").match(Se) || ["-", 0, 0],
            f = +(60 * e[1]) + u(e[2]);
        return 0 === f ? 0 : "+" === e[0] ? f : -f
    }

    function Fb(b, c) {
        var d, e;
        return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local()
    }

    function Gb(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Hb(b, c, d) {
        var e, f = this._offset || 0;
        if (!this.isValid()) return null != b ? this : NaN;
        if (null != b) {
            if ("string" == typeof b) {
                if (b = Eb(_d, b), null === b) return this
            } else Math.abs(b) < 16 && !d && (b = 60 * b);
            return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? f : Gb(this)
    }

    function Ib(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Jb(a) {
        return this.utcOffset(0, a)
    }

    function Kb(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this
    }

    function Lb() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var a = Eb($d, this._i);
            null != a ? this.utcOffset(a) : this.utcOffset(0, !0)
        }
        return this
    }

    function Mb(a) {
        return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0)
    }

    function Nb() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ob() {
        if (!f(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (q(a, this), a = qb(a), a._a) {
            var b = a._isUTC ? l(a._a) : tb(a._a);
            this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Pb() {
        return !!this.isValid() && !this._isUTC
    }

    function Qb() {
        return !!this.isValid() && this._isUTC
    }

    function Rb() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }

    function Sb(a, b) {
        var c, d, e, f = a,
            h = null;
        return Bb(a) ? f = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Te.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
            y: 0,
            d: u(h[ge]) * c,
            h: u(h[he]) * c,
            m: u(h[ie]) * c,
            s: u(h[je]) * c,
            ms: u(Cb(1e3 * h[ke])) * c
        }) : (h = Ue.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
            y: Tb(h[2], c),
            M: Tb(h[3], c),
            w: Tb(h[4], c),
            d: Tb(h[5], c),
            h: Tb(h[6], c),
            m: Tb(h[7], c),
            s: Tb(h[8], c)
        }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d
    }

    function Tb(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }

    function Ub(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function Vb(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        }
    }

    function Wb(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this
        }
    }

    function Xb(b, c, d, e) {
        var f = c._milliseconds,
            g = Cb(c._days),
            h = Cb(c._months);
        b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h))
    }

    function Yb(a, b) {
        var c = a.diff(b, "days", !0);
        return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse"
    }

    function Zb(b, c) {
        var d = b || tb(),
            e = Fb(d, this).startOf("day"),
            f = a.calendarFormat(this, e) || "sameElse",
            g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
        return this.format(g || this.localeData().calendar(f, this, tb(d)))
    }

    function $b() {
        return new r(this)
    }

    function _b(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf())
    }

    function ac(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf())
    }

    function bc(a, b, c, d) {
        return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
    }

    function cc(a, b) {
        var c, d = s(a) ? a : tb(a);
        return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()))
    }

    function dc(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b)
    }

    function ec(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b)
    }

    function fc(a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN
    }

    function gc(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
    }

    function hc() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ic() {
        if (!this.isValid()) return null;
        var a = this.clone().utc();
        return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function jc() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var a = "moment",
            b = "";
        this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");
        var c = "[" + a + '("]',
            d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            e = "-MM-DD[T]HH:mm:ss.SSS",
            f = b + '[")]';
        return this.format(c + d + e + f)
    }

    function kc(b) {
        b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
        var c = X(this, b);
        return this.localeData().postformat(c)
    }

    function lc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function mc(a) {
        return this.from(tb(), a)
    }

    function nc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function oc(a) {
        return this.to(tb(), a)
    }

    function pc(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this)
    }

    function qc() {
        return this._locale
    }

    function rc(a) {
        switch (a = K(a)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function sc(a) {
        return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
    }

    function tc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function uc() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function vc() {
        return new Date(this.valueOf())
    }

    function wc() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function xc() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }

    function yc() {
        return this.isValid() ? this.toISOString() : null
    }

    function zc() {
        return o(this)
    }

    function Ac() {
        return k({}, n(this))
    }

    function Bc() {
        return n(this).overflow
    }

    function Cc() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function Dc(a, b) {
        U(0, [a, a.length], 0, b)
    }

    function Ec(a) {
        return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Fc(a) {
        return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Gc() {
        return xa(this.year(), 1, 4)
    }

    function Hc() {
        var a = this.localeData()._week;
        return xa(this.year(), a.dow, a.doy)
    }

    function Ic(a, b, c, d, e) {
        var f;
        return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e))
    }

    function Jc(a, b, c, d, e) {
        var f = va(a, b, c, d, e),
            g = ta(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
    }

    function Kc(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Lc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function Mc(a, b) {
        b[ke] = u(1e3 * ("0." + a))
    }

    function Nc() {
        return this._isUTC ? "UTC" : ""
    }

    function Oc() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Pc(a) {
        return tb(1e3 * a)
    }

    function Qc() {
        return tb.apply(null, arguments).parseZone()
    }

    function Rc(a) {
        return a
    }

    function Sc(a, b, c, d) {
        var e = bb(),
            f = l().set(d, b);
        return e[c](f, a)
    }

    function Tc(a, b, c) {
        if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");
        var d, e = [];
        for (d = 0; d < 12; d++) e[d] = Sc(a, d, c, "month");
        return e
    }

    function Uc(a, b, c, d) {
        "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || "");
        var e = bb(),
            f = a ? e._week.dow : 0;
        if (null != c) return Sc(b, (c + f) % 7, d, "day");
        var h, i = [];
        for (h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, "day");
        return i
    }

    function Vc(a, b) {
        return Tc(a, b, "months")
    }

    function Wc(a, b) {
        return Tc(a, b, "monthsShort")
    }

    function Xc(a, b, c) {
        return Uc(a, b, c, "weekdays")
    }

    function Yc(a, b, c) {
        return Uc(a, b, c, "weekdaysShort")
    }

    function Zc(a, b, c) {
        return Uc(a, b, c, "weekdaysMin")
    }

    function $c() {
        var a = this._data;
        return this._milliseconds = df(this._milliseconds), this._days = df(this._days), this._months = df(this._months), a.milliseconds = df(a.milliseconds), a.seconds = df(a.seconds), a.minutes = df(a.minutes), a.hours = df(a.hours), a.months = df(a.months), a.years = df(a.years), this
    }

    function _c(a, b, c, d) {
        var e = Sb(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function ad(a, b) {
        return _c(this, a, b, 1)
    }

    function bd(a, b) {
        return _c(this, a, b, -1)
    }

    function cd(a) {
        return a < 0 ? Math.floor(a) : Math.ceil(a)
    }

    function dd() {
        var a, b, c, d, e, f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function ed(a) {
        return 4800 * a / 146097
    }

    function fd(a) {
        return 146097 * a / 4800
    }

    function gd(a) {
        if (!this.isValid()) return NaN;
        var b, c, d = this._milliseconds;
        if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(fd(this._months)), a) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }

    function hd() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN
    }

    function id(a) {
        return function() {
            return this.as(a)
        }
    }

    function jd(a) {
        return a = K(a), this.isValid() ? this[a + "s"]() : NaN
    }

    function kd(a) {
        return function() {
            return this.isValid() ? this._data[a] : NaN
        }
    }

    function ld() {
        return t(this.days() / 7)
    }

    function md(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function nd(a, b, c) {
        var d = Sb(a).abs(),
            e = uf(d.as("s")),
            f = uf(d.as("m")),
            g = uf(d.as("h")),
            h = uf(d.as("d")),
            i = uf(d.as("M")),
            j = uf(d.as("y")),
            k = e <= vf.ss && ["s", e] || e < vf.s && ["ss", e] || f <= 1 && ["m"] || f < vf.m && ["mm", f] || g <= 1 && ["h"] || g < vf.h && ["hh", g] || h <= 1 && ["d"] || h < vf.d && ["dd", h] || i <= 1 && ["M"] || i < vf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k)
    }

    function od(a) {
        return void 0 === a ? uf : "function" == typeof a && (uf = a, !0)
    }

    function pd(a, b) {
        return void 0 !== vf[a] && (void 0 === b ? vf[a] : (vf[a] = b, "s" === a && (vf.ss = b - 1), !0))
    }

    function qd(a) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var b = this.localeData(),
            c = nd(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function rd() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a, b, c, d = wf(this._milliseconds) / 1e3,
            e = wf(this._days),
            f = wf(this._months);
        a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;
        var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();
        return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }
    var sd, td;
    td = Array.prototype.some ? Array.prototype.some : function(a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
            if (d in b && a.call(this, b[d], d, b)) return !0;
        return !1
    };
    var ud = td,
        vd = a.momentProperties = [],
        wd = !1,
        xd = {};
    a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
    var yd;
    yd = Object.keys ? Object.keys : function(a) {
        var b, c = [];
        for (b in a) j(a, b) && c.push(b);
        return c
    };
    var zd, Ad = yd,
        Bd = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        Cd = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        Dd = "Invalid date",
        Ed = "%d",
        Fd = /\d{1,2}/,
        Gd = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Hd = {},
        Id = {},
        Jd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Ld = {},
        Md = {},
        Nd = /\d/,
        Od = /\d\d/,
        Pd = /\d{3}/,
        Qd = /\d{4}/,
        Rd = /[+-]?\d{6}/,
        Sd = /\d\d?/,
        Td = /\d\d\d\d?/,
        Ud = /\d\d\d\d\d\d?/,
        Vd = /\d{1,3}/,
        Wd = /\d{1,4}/,
        Xd = /[+-]?\d{1,6}/,
        Yd = /\d+/,
        Zd = /[+-]?\d+/,
        $d = /Z|[+-]\d\d:?\d\d/gi,
        _d = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ae = /[+-]?\d+(\.\d{1,3})?/,
        be = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        ce = {},
        de = {},
        ee = 0,
        fe = 1,
        ge = 2,
        he = 3,
        ie = 4,
        je = 5,
        ke = 6,
        le = 7,
        me = 8;
    zd = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
        var b;
        for (b = 0; b < this.length; ++b)
            if (this[b] === a) return b;
        return -1
    };
    var ne = zd;
    U("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), U("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a)
    }), U("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a)
    }), J("month", "M"), M("month", 8), Z("M", Sd), Z("MM", Sd, Od), Z("MMM", function(a, b) {
        return b.monthsShortRegex(a)
    }), Z("MMMM", function(a, b) {
        return b.monthsRegex(a)
    }), ba(["M", "MM"], function(a, b) {
        b[fe] = u(a) - 1
    }), ba(["MMM", "MMMM"], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[fe] = e : n(c).invalidMonth = a
    });
    var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        re = be,
        se = be;
    U("Y", 0, 0, function() {
        var a = this.year();
        return a <= 9999 ? "" + a : "+" + a
    }), U(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Zd), Z("YY", Sd, Od), Z("YYYY", Wd, Qd), Z("YYYYY", Xd, Rd), Z("YYYYYY", Xd, Rd), ba(["YYYYY", "YYYYYY"], ee), ba("YYYY", function(b, c) {
        c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b)
    }), ba("YY", function(b, c) {
        c[ee] = a.parseTwoDigitYear(b)
    }), ba("Y", function(a, b) {
        b[ee] = parseInt(a, 10)
    }), a.parseTwoDigitYear = function(a) {
        return u(a) + (u(a) > 68 ? 1900 : 2e3)
    };
    var te = O("FullYear", !0);
    U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Sd), Z("ww", Sd, Od), Z("W", Sd), Z("WW", Sd, Od), ca(["w", "ww", "W", "WW"], function(a, b, c, d) {
        b[d.substr(0, 1)] = u(a)
    });
    var ue = {
        dow: 0,
        doy: 6
    };
    U("d", 0, "do", "day"), U("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a)
    }), U("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a)
    }), U("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a)
    }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Sd), Z("e", Sd), Z("E", Sd), Z("dd", function(a, b) {
        return b.weekdaysMinRegex(a)
    }), Z("ddd", function(a, b) {
        return b.weekdaysShortRegex(a)
    }), Z("dddd", function(a, b) {
        return b.weekdaysRegex(a)
    }), ca(["dd", "ddd", "dddd"], function(a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? b.d = e : n(c).invalidWeekday = a
    }), ca(["d", "e", "E"], function(a, b, c, d) {
        b[d] = u(a)
    });
    var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        ye = be,
        ze = be,
        Ae = be;
    U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2)
    }), U("hmmss", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
    }), U("Hmm", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2)
    }), U("Hmmss", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
    }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Sd), Z("h", Sd), Z("k", Sd), Z("HH", Sd, Od), Z("hh", Sd, Od), Z("kk", Sd, Od), Z("hmm", Td), Z("hmmss", Ud), Z("Hmm", Td), Z("Hmmss", Ud), ba(["H", "HH"], he), ba(["k", "kk"], function(a, b, c) {
        var d = u(a);
        b[he] = 24 === d ? 0 : d
    }), ba(["a", "A"], function(a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a
    }), ba(["h", "hh"], function(a, b, c) {
        b[he] = u(a), n(c).bigHour = !0
    }), ba("hmm", function(a, b, c) {
        var d = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d)), n(c).bigHour = !0
    }), ba("hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e)), n(c).bigHour = !0
    }), ba("Hmm", function(a, b, c) {
        var d = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d))
    }), ba("Hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e))
    });
    var Be, Ce = /[ap]\.?m?\.?/i,
        De = O("Hours", !0),
        Ee = {
            calendar: Bd,
            longDateFormat: Cd,
            invalidDate: Dd,
            ordinal: Ed,
            dayOfMonthOrdinalParse: Fd,
            relativeTime: Gd,
            months: pe,
            monthsShort: qe,
            week: ue,
            weekdays: ve,
            weekdaysMin: xe,
            weekdaysShort: we,
            meridiemParse: Ce
        },
        Fe = {},
        Ge = {},
        He = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Ie = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Je = /Z|[+-]\d\d(?::?\d\d)?/,
        Ke = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Le = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Me = /^\/?Date\((\-?\d+)/i,
        Ne = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
    a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), a.ISO_8601 = function() {}, a.RFC_2822 = function() {};
    var Oe = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var a = tb.apply(null, arguments);
            return this.isValid() && a.isValid() ? a < this ? this : a : p()
        }),
        Pe = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var a = tb.apply(null, arguments);
            return this.isValid() && a.isValid() ? a > this ? this : a : p()
        }),
        Qe = function() {
            return Date.now ? Date.now() : +new Date
        },
        Re = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Db("Z", ":"), Db("ZZ", ""), Z("Z", _d), Z("ZZ", _d), ba(["Z", "ZZ"], function(a, b, c) {
        c._useUTC = !0, c._tzm = Eb(_d, a)
    });
    var Se = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Ue = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Sb.fn = Ab.prototype, Sb.invalid = zb;
    var Ve = Wb(1, "add"),
        We = Wb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xe = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    U(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), U(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Zd), Z("g", Zd), Z("GG", Sd, Od), Z("gg", Sd, Od), Z("GGGG", Wd, Qd), Z("gggg", Wd, Qd), Z("GGGGG", Xd, Rd), Z("ggggg", Xd, Rd), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
        b[d.substr(0, 2)] = u(a)
    }), ca(["gg", "GG"], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Nd), ba("Q", function(a, b) {
        b[fe] = 3 * (u(a) - 1)
    }), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Sd), Z("DD", Sd, Od), Z("Do", function(a, b) {
        return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient
    }), ba(["D", "DD"], ge), ba("Do", function(a, b) {
        b[ge] = u(a.match(Sd)[0], 10)
    });
    var Ye = O("Date", !0);
    U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Vd), Z("DDDD", Pd), ba(["DDD", "DDDD"], function(a, b, c) {
        c._dayOfYear = u(a)
    }), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Sd), Z("mm", Sd, Od), ba(["m", "mm"], ie);
    var Ze = O("Minutes", !1);
    U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Sd), Z("ss", Sd, Od), ba(["s", "ss"], je);
    var $e = O("Seconds", !1);
    U("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), U(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), U(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), U(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), U(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), U(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), U(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Vd, Nd), Z("SS", Vd, Od), Z("SSS", Vd, Pd);
    var _e;
    for (_e = "SSSS"; _e.length <= 9; _e += "S") Z(_e, Yd);
    for (_e = "S"; _e.length <= 9; _e += "S") ba(_e, Mc);
    var af = O("Milliseconds", !1);
    U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
    var bf = r.prototype;
    bf.add = Ve, bf.calendar = Zb, bf.clone = $b, bf.diff = fc, bf.endOf = sc, bf.format = kc, bf.from = lc, bf.fromNow = mc, bf.to = nc, bf.toNow = oc, bf.get = R, bf.invalidAt = Bc, bf.isAfter = _b, bf.isBefore = ac, bf.isBetween = bc, bf.isSame = cc, bf.isSameOrAfter = dc, bf.isSameOrBefore = ec, bf.isValid = zc, bf.lang = Xe, bf.locale = pc, bf.localeData = qc, bf.max = Pe, bf.min = Oe, bf.parsingFlags = Ac, bf.set = S, bf.startOf = rc, bf.subtract = We, bf.toArray = wc, bf.toObject = xc, bf.toDate = vc, bf.toISOString = ic, bf.inspect = jc, bf.toJSON = yc, bf.toString = hc, bf.unix = uc, bf.valueOf = tc, bf.creationData = Cc, bf.year = te, bf.isLeapYear = ra, bf.weekYear = Ec, bf.isoWeekYear = Fc, bf.quarter = bf.quarters = Kc, bf.month = ka, bf.daysInMonth = la, bf.week = bf.weeks = Ba, bf.isoWeek = bf.isoWeeks = Ca, bf.weeksInYear = Hc, bf.isoWeeksInYear = Gc, bf.date = Ye, bf.day = bf.days = Ka, bf.weekday = La, bf.isoWeekday = Ma, bf.dayOfYear = Lc, bf.hour = bf.hours = De, bf.minute = bf.minutes = Ze, bf.second = bf.seconds = $e, bf.millisecond = bf.milliseconds = af, bf.utcOffset = Hb, bf.utc = Jb, bf.local = Kb, bf.parseZone = Lb, bf.hasAlignedHourOffset = Mb, bf.isDST = Nb, bf.isLocal = Pb, bf.isUtcOffset = Qb, bf.isUtc = Rb, bf.isUTC = Rb, bf.zoneAbbr = Nc, bf.zoneName = Oc, bf.dates = x("dates accessor is deprecated. Use date instead.", Ye), bf.months = x("months accessor is deprecated. Use month instead", ka), bf.years = x("years accessor is deprecated. Use year instead", te), bf.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bf.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);
    var cf = C.prototype;
    cf.calendar = D, cf.longDateFormat = E, cf.invalidDate = F, cf.ordinal = G, cf.preparse = Rc, cf.postformat = Rc, cf.relativeTime = H, cf.pastFuture = I, cf.set = A, cf.months = fa, cf.monthsShort = ga, cf.monthsParse = ia, cf.monthsRegex = na, cf.monthsShortRegex = ma, cf.week = ya, cf.firstDayOfYear = Aa, cf.firstDayOfWeek = za, cf.weekdays = Fa, cf.weekdaysMin = Ha, cf.weekdaysShort = Ga, cf.weekdaysParse = Ja, cf.weekdaysRegex = Na, cf.weekdaysShortRegex = Oa, cf.weekdaysMinRegex = Pa, cf.isPM = Va, cf.meridiem = Wa, $a("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10,
                c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
    var df = Math.abs,
        ef = id("ms"),
        ff = id("s"),
        gf = id("m"),
        hf = id("h"),
        jf = id("d"),
        kf = id("w"),
        lf = id("M"),
        mf = id("y"),
        nf = kd("milliseconds"),
        of = kd("seconds"),
        pf = kd("minutes"),
        qf = kd("hours"),
        rf = kd("days"),
        sf = kd("months"),
        tf = kd("years"),
        uf = Math.round,
        vf = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        wf = Math.abs,
        xf = Ab.prototype;
    return xf.isValid = yb, xf.abs = $c, xf.add = ad, xf.subtract = bd, xf.as = gd, xf.asMilliseconds = ef, xf.asSeconds = ff, xf.asMinutes = gf, xf.asHours = hf, xf.asDays = jf, xf.asWeeks = kf, xf.asMonths = lf, xf.asYears = mf, xf.valueOf = hd, xf._bubble = dd, xf.get = jd, xf.milliseconds = nf, xf.seconds = of , xf.minutes = pf, xf.hours = qf, xf.days = rf, xf.weeks = ld, xf.months = sf, xf.years = tf, xf.humanize = qd, xf.toISOString = rd, xf.toString = rd, xf.toJSON = rd, xf.locale = pc, xf.localeData = qc, xf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), xf.lang = Xe, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Zd), Z("X", ae), ba("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }), ba("x", function(a, b, c) {
        c._d = new Date(u(a))
    }), a.version = "2.18.1", b(tb), a.fn = bf, a.min = vb, a.max = wb, a.now = Qe, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bf, a
});


//! barba.js
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Barba", [], e) : "object" == typeof exports ? exports.Barba = e() : t.Barba = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "http://localhost:8080/dist", e(0)
    }([function(t, e, n) {
        "function" != typeof Promise && (window.Promise = n(1));
        var r = {
            version: "1.0.0",
            BaseTransition: n(4),
            BaseView: n(6),
            BaseCache: n(8),
            Dispatcher: n(7),
            HistoryManager: n(9),
            Pjax: n(10),
            Prefetch: n(13),
            Utils: n(5)
        };
        t.exports = r
    }, function(t, e, n) {
        (function(e) {
            ! function(n) {
                function r() {}

                function i(t, e) {
                    return function() {
                        t.apply(e, arguments)
                    }
                }

                function o(t) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], h(t, this)
                }

                function s(t, e) {
                    for (; 3 === t._state;) t = t._value;
                    return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void l(function() {
                        var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                        if (null === n) return void(1 === t._state ? a : c)(e.promise, t._value);
                        var r;
                        try {
                            r = n(t._value)
                        } catch (t) {
                            return void c(e.promise, t)
                        }
                        a(e.promise, r)
                    }))
                }

                function a(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof o) return t._state = 3, t._value = e, void u(t);
                            if ("function" == typeof n) return void h(i(n, e), t)
                        }
                        t._state = 1, t._value = e, u(t)
                    } catch (e) {
                        c(t, e)
                    }
                }

                function c(t, e) {
                    t._state = 2, t._value = e, u(t)
                }

                function u(t) {
                    2 === t._state && 0 === t._deferreds.length && l(function() {
                        t._handled || p(t._value)
                    });
                    for (var e = 0, n = t._deferreds.length; e < n; e++) s(t, t._deferreds[e]);
                    t._deferreds = null
                }

                function f(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
                }

                function h(t, e) {
                    var n = !1;
                    try {
                        t(function(t) {
                            n || (n = !0, a(e, t))
                        }, function(t) {
                            n || (n = !0, c(e, t))
                        })
                    } catch (t) {
                        if (n) return;
                        n = !0, c(e, t)
                    }
                }
                var d = setTimeout,
                    l = "function" == typeof e && e || function(t) {
                        d(t, 0)
                    },
                    p = function(t) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                    };
                o.prototype.catch = function(t) {
                    return this.then(null, t)
                }, o.prototype.then = function(t, e) {
                    var n = new this.constructor(r);
                    return s(this, new f(t, e, n)), n
                }, o.all = function(t) {
                    var e = Array.prototype.slice.call(t);
                    return new o(function(t, n) {
                        function r(o, s) {
                            try {
                                if (s && ("object" == typeof s || "function" == typeof s)) {
                                    var a = s.then;
                                    if ("function" == typeof a) return void a.call(s, function(t) {
                                        r(o, t)
                                    }, n)
                                }
                                e[o] = s, 0 === --i && t(e)
                            } catch (t) {
                                n(t)
                            }
                        }
                        if (0 === e.length) return t([]);
                        for (var i = e.length, o = 0; o < e.length; o++) r(o, e[o])
                    })
                }, o.resolve = function(t) {
                    return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
                        e(t)
                    })
                }, o.reject = function(t) {
                    return new o(function(e, n) {
                        n(t)
                    })
                }, o.race = function(t) {
                    return new o(function(e, n) {
                        for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
                    })
                }, o._setImmediateFn = function(t) {
                    l = t
                }, o._setUnhandledRejectionFn = function(t) {
                    p = t
                }, "undefined" != typeof t && t.exports ? t.exports = o : n.Promise || (n.Promise = o)
            }(this)
        }).call(e, n(2).setImmediate)
    }, function(t, e, n) {
        (function(t, r) {
            function i(t, e) {
                this._id = t, this._clearFn = e
            }
            var o = n(3).nextTick,
                s = Function.prototype.apply,
                a = Array.prototype.slice,
                c = {},
                u = 0;
            e.setTimeout = function() {
                return new i(s.call(setTimeout, window, arguments), clearTimeout)
            }, e.setInterval = function() {
                return new i(s.call(setInterval, window, arguments), clearInterval)
            }, e.clearTimeout = e.clearInterval = function(t) {
                t.close()
            }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }, e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout()
                }, e))
            }, e.setImmediate = "function" == typeof t ? t : function(t) {
                var n = u++,
                    r = !(arguments.length < 2) && a.call(arguments, 1);
                return c[n] = !0, o(function() {
                    c[n] && (r ? t.apply(null, r) : t.call(null), e.clearImmediate(n))
                }), n
            }, e.clearImmediate = "function" == typeof r ? r : function(t) {
                delete c[t]
            }
        }).call(e, n(2).setImmediate, n(2).clearImmediate)
    }, function(t, e) {
        function n() {
            h && u && (h = !1, u.length ? f = u.concat(f) : d = -1, f.length && r())
        }

        function r() {
            if (!h) {
                var t = s(n);
                h = !0;
                for (var e = f.length; e;) {
                    for (u = f, f = []; ++d < e;) u && u[d].run();
                    d = -1, e = f.length
                }
                u = null, h = !1, a(t)
            }
        }

        function i(t, e) {
            this.fun = t, this.array = e
        }

        function o() {}
        var s, a, c = t.exports = {};
        ! function() {
            try {
                s = setTimeout
            } catch (t) {
                s = function() {
                    throw new Error("setTimeout is not defined")
                }
            }
            try {
                a = clearTimeout
            } catch (t) {
                a = function() {
                    throw new Error("clearTimeout is not defined")
                }
            }
        }();
        var u, f = [],
            h = !1,
            d = -1;
        c.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            f.push(new i(t, e)), 1 !== f.length || h || s(r, 0)
        }, i.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = o, c.addListener = o, c.once = o, c.off = o, c.removeListener = o, c.removeAllListeners = o, c.emit = o, c.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, c.cwd = function() {
            return "/"
        }, c.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, c.umask = function() {
            return 0
        }
    }, function(t, e, n) {
        var r = n(5),
            i = {
                oldContainer: void 0,
                newContainer: void 0,
                newContainerLoading: void 0,
                extend: function(t) {
                    return r.extend(this, t)
                },
                init: function(t, e) {
                    var n = this;
                    return this.oldContainer = t, this._newContainerPromise = e, this.deferred = r.deferred(), this.newContainerReady = r.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function(t) {
                        n.newContainer = t, n.newContainerReady.resolve()
                    }), this.deferred.promise
                },
                done: function() {
                    this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve()
                },
                start: function() {}
            };
        t.exports = i
    }, function(t, e) {
        var n = {
            getCurrentUrl: function() {
                return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
            },
            cleanLink: function(t) {
                return t.replace(/#.*/, "")
            },
            xhrTimeout: 5e3,
            xhr: function(t) {
                var e = this.deferred(),
                    n = new XMLHttpRequest;
                return n.onreadystatechange = function() {
                    if (4 === n.readyState) return 200 === n.status ? e.resolve(n.responseText) : e.reject(new Error("xhr: HTTP code is not 200"))
                }, n.ontimeout = function() {
                    return e.reject(new Error("xhr: Timeout exceeded"))
                }, n.open("GET", t), n.timeout = this.xhrTimeout, n.setRequestHeader("x-barba", "yes"), n.send(), e.promise
            },
            extend: function(t, e) {
                var n = Object.create(t);
                for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                return n
            },
            deferred: function() {
                return new function() {
                    this.resolve = null, this.reject = null, this.promise = new Promise(function(t, e) {
                        this.resolve = t, this.reject = e
                    }.bind(this))
                }
            },
            getPort: function(t) {
                var e = "undefined" != typeof t ? t : window.location.port,
                    n = window.location.protocol;
                return "" != e ? parseInt(e) : "http:" === n ? 80 : "https:" === n ? 443 : void 0
            }
        };
        t.exports = n
    }, function(t, e, n) {
        var r = n(7),
            i = n(5),
            o = {
                namespace: null,
                extend: function(t) {
                    return i.extend(this, t)
                },
                init: function() {
                    var t = this;
                    r.on("initStateChange", function(e, n) {
                        n && n.namespace === t.namespace && t.onLeave()
                    }), r.on("newPageReady", function(e, n, r) {
                        t.container = r, e.namespace === t.namespace && t.onEnter()
                    }), r.on("transitionCompleted", function(e, n) {
                        e.namespace === t.namespace && t.onEnterCompleted(), n && n.namespace === t.namespace && t.onLeaveCompleted()
                    })
                },
                onEnter: function() {},
                onEnterCompleted: function() {},
                onLeave: function() {},
                onLeaveCompleted: function() {}
            };
        t.exports = o
    }, function(t, e) {
        var n = {
            events: {},
            on: function(t, e) {
                this.events[t] = this.events[t] || [], this.events[t].push(e)
            },
            off: function(t, e) {
                t in this.events != !1 && this.events[t].splice(this.events[t].indexOf(e), 1)
            },
            trigger: function(t) {
                if (t in this.events != !1)
                    for (var e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        };
        t.exports = n
    }, function(t, e, n) {
        var r = n(5),
            i = {
                data: {},
                extend: function(t) {
                    return r.extend(this, t)
                },
                set: function(t, e) {
                    this.data[t] = e
                },
                get: function(t) {
                    return this.data[t]
                },
                reset: function() {
                    this.data = {}
                }
            };
        t.exports = i
    }, function(t, e) {
        var n = {
            history: [],
            add: function(t, e) {
                e || (e = void 0), this.history.push({
                    url: t,
                    namespace: e
                })
            },
            currentStatus: function() {
                return this.history[this.history.length - 1]
            },
            prevStatus: function() {
                var t = this.history;
                return t.length < 2 ? null : t[t.length - 2]
            }
        };
        t.exports = n
    }, function(t, e, n) {
        var r = n(5),
            i = n(7),
            o = n(11),
            s = n(8),
            a = n(9),
            c = n(12),
            u = {
                Dom: c,
                History: a,
                Cache: s,
                cacheEnabled: !0,
                transitionProgress: !1,
                ignoreClassLink: "no-barba",
                start: function() {
                    this.init()
                },
                init: function() {
                    var t = this.Dom.getContainer(),
                        e = this.Dom.getWrapper();
                    e.setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(t)), i.trigger("initStateChange", this.History.currentStatus()), i.trigger("newPageReady", this.History.currentStatus(), {}, t, this.Dom.currentHTML), i.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents()
                },
                bindEvents: function() {
                    document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this))
                },
                getCurrentUrl: function() {
                    return r.cleanLink(r.getCurrentUrl())
                },
                goTo: function(t) {
                    window.history.pushState(null, null, t), this.onStateChange()
                },
                forceGoTo: function(t) {
                    window.location = t
                },
                load: function(t) {
                    var e, n = r.deferred(),
                        i = this;
                    return e = this.Cache.get(t), e || (e = r.xhr(t), this.Cache.set(t, e)), e.then(function(t) {
                        var e = i.Dom.parseResponse(t);
                        i.Dom.putContainer(e), i.cacheEnabled || i.Cache.reset(), n.resolve(e)
                    }, function() {
                        i.forceGoTo(t), n.reject()
                    }), n.promise
                },
                getHref: function(t) {
                    if (t) return t.getAttribute && "string" == typeof t.getAttribute("xlink:href") ? t.getAttribute("xlink:href") : "string" == typeof t.href ? t.href : void 0
                },
                onLinkClick: function(t) {
                    for (var e = t.target; e && !this.getHref(e);) e = e.parentNode;
                    if (this.preventCheck(t, e)) {
                        t.stopPropagation(), t.preventDefault(), i.trigger("linkClicked", e, t);
                        var n = this.getHref(e);
                        this.goTo(n)
                    }
                },
                preventCheck: function(t, e) {
                    if (!window.history.pushState) return !1;
                    var n = this.getHref(e);
                    return !(!e || !n) && (!(t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) && ((!e.target || "_blank" !== e.target) && (window.location.protocol === e.protocol && window.location.hostname === e.hostname && (r.getPort() === r.getPort(e.port) && (!(n.indexOf("#") > -1) && ((!e.getAttribute || "string" != typeof e.getAttribute("download")) && (r.cleanLink(n) != r.cleanLink(location.href) && !e.classList.contains(this.ignoreClassLink))))))))
                },
                getTransition: function() {
                    return o
                },
                onStateChange: function() {
                    var t = this.getCurrentUrl();
                    if (this.transitionProgress && this.forceGoTo(t), this.History.currentStatus().url === t) return !1;
                    this.History.add(t);
                    var e = this.load(t),
                        n = Object.create(this.getTransition());
                    this.transitionProgress = !0, i.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                    var r = n.init(this.Dom.getContainer(), e);
                    e.then(this.onNewContainerLoaded.bind(this)), r.then(this.onTransitionEnd.bind(this))
                },
                onNewContainerLoaded: function(t) {
                    var e = this.History.currentStatus();
                    e.namespace = this.Dom.getNamespace(t), i.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), t, this.Dom.currentHTML)
                },
                onTransitionEnd: function() {
                    this.transitionProgress = !1, i.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
                }
            };
        t.exports = u
    }, function(t, e, n) {
        var r = n(4),
            i = r.extend({
                start: function() {
                    this.newContainerLoading.then(this.finish.bind(this))
                },
                finish: function() {
                    document.body.scrollTop = 0, this.done()
                }
            });
        t.exports = i
    }, function(t, e) {
        var n = {
            dataNamespace: "namespace",
            wrapperId: "barba-wrapper",
            containerClass: "barba-container",
            currentHTML: document.documentElement.innerHTML,
            parseResponse: function(t) {
                this.currentHTML = t;
                var e = document.createElement("div");
                e.innerHTML = t;
                var n = e.querySelector("title");
                return n && (document.title = n.textContent), this.getContainer(e)
            },
            getWrapper: function() {
                var t = document.getElementById(this.wrapperId);
                if (!t) throw new Error("Barba.js: wrapper not found!");
                return t
            },
            getContainer: function(t) {
                if (t || (t = document.body), !t) throw new Error("Barba.js: DOM not ready!");
                var e = this.parseContainer(t);
                if (e && e.jquery && (e = e[0]), !e) throw new Error("Barba.js: no container found");
                return e
            },
            getNamespace: function(t) {
                return t && t.dataset ? t.dataset[this.dataNamespace] : t ? t.getAttribute("data-" + this.dataNamespace) : null
            },
            putContainer: function(t) {
                t.style.visibility = "hidden";
                var e = this.getWrapper();
                e.appendChild(t)
            },
            parseContainer: function(t) {
                return t.querySelector("." + this.containerClass)
            }
        };
        t.exports = n
    }, function(t, e, n) {
        var r = n(5),
            i = n(10),
            o = {
                ignoreClassLink: "no-barba-prefetch",
                init: function() {
                    return !!window.history.pushState && (document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), void document.body.addEventListener("touchstart", this.onLinkEnter.bind(this)))
                },
                onLinkEnter: function(t) {
                    for (var e = t.target; e && !i.getHref(e);) e = e.parentNode;
                    if (e && !e.classList.contains(this.ignoreClassLink)) {
                        var n = i.getHref(e);
                        if (i.preventCheck(t, e) && !i.Cache.get(n)) {
                            var o = r.xhr(n);
                            i.Cache.set(n, o)
                        }
                    }
                }
            };
        t.exports = o
    }])
});





// ----- HELPER FUNCTIONS ----- //

// get index of an element in its parent node

function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i = 0; i < children.length; i++) {
        if (children[i] == node) return num;
        if (children[i].nodeType == 1) num++;
    }
    return -1;
}

// element(index) selector 

function eq(index) {
    if (index >= 0 && index < this.length)
        return this[index];
    else
        return -1;
}

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}


function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}




// ---------- Loading Screen ---------- //

;
(function() {
    function id(v) {
        return document.getElementById(v);
    }

    function loadbar() {
        var ovrl = id("overlay"),
            stat = id("progstat"),
            cvrl = id("content-overlay"),
            pvrl = id("progress-overlay"),
            itms = id("loading-items"),
            logo = id("logo"),
            img = document.images,
            c = 0,
            tot = img.length;
        var path = logo.querySelectorAll(path);
        disableScroll();

        TweenMax.set(path, {
            x: 110,
            alpha: 0
        });

        TweenMax.staggerTo(
            path, 1.5, {
                x: 0,
                alpha: 1,
                ease: Power4.easeInOut
            }, 0.02
        );

        if (tot == 0) {
            setTimeout(function() {
                doneLoading();
            }, 400);
        }

        function imgLoaded() {
            c += 1;
            var perc = ((100 / tot * c) << 0);

            stat.innerHTML = "Loading " + perc + "%";

            if (c === tot) {
                setTimeout(function() {
                    doneLoading();
                }, 100);
            }

        }

        function doneLoading() {

            enableScroll();

            TweenMax.to(
                ovrl, 1.5, {
                    width: 0,
                    ease: Expo.easeInOut,
                    delay: .5
                }
            );
            TweenMax.to(
                pvrl, 1.5, {
                    width: 0,
                    ease: Expo.easeInOut,
                    delay: .6
                }
            );
            TweenMax.to(
                cvrl, 1.5, {
                    alpha: 0,
                    ease: Power3.easeInOut,
                    delay: .6
                }
            );
            TweenMax.to(
                itms, 1.3, {
                    alpha: 0,
                    ease: Expo.easeInOut,
                    delay: .5
                }
            );
            setTimeout(function() {
                ovrl.style.display = "none";
                cvrl.style.display = "none";
            }, 2200);

            setTimeout(function() {
                triggerResize();
                headerAnimate();
            }, 600);

            setTimeout(function() {
                triggerResize();
            }, 1200);



        }
        for (var i = 0; i < tot; i++) {
            var tImg = new Image();
            tImg.onload = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());

function triggerResize() {
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('resize', true, false);
    window.dispatchEvent(ev);
};



// Dynamic Load for Barba


function showDynamicLoad() {
    var dynamicLoad = document.getElementById('dynamicLoad');
    var dynamicProgress = dynamicLoad.querySelector('.progress');

    TweenMax.to(
        dynamicProgress, .5, {
            width: '100%',
            ease: Expo.easeInOut
        }
    );
}

function runDynamicLoad(content) {

    var dynamicLoad = document.getElementById('dynamicLoad');
    var dynamicBar = dynamicLoad.querySelector('.bar');

    var img = content.querySelectorAll('img');
    var c = 0;
    var tot = img.length;

    if (tot == 0) {
        setTimeout(function() {
            doneDynamicLoad();
        }, 100);
    }

    function imgLoaded() {
        c += 1;
        var perc = ((100 / tot * c) << 0);
        dynamicBar.style.width = perc + '%';

        if (c === tot) {
            setTimeout(function() {
                doneDynamicLoad();
            }, 200);
        }
    }

    for (var i = 0; i < tot; i++) {
        var tImg = new Image();
        tImg.onload = imgLoaded;
        tImg.onerror = imgLoaded;
        tImg.src = img[i].src;
    }

    function doneDynamicLoad() {
        var head = document.getElementById('main-logo');
        var menu = document.getElementById('menu');
        var overlay = document.getElementById('menu-overlay');
        var navBtn = document.getElementById('nav');
        var menuClip = document.getElementById('menuClip');
        var clsBtn = document.getElementById('navClose');
        var navItm = document.querySelectorAll('.menu-item');
        var navTxt = menuClip.querySelectorAll('.menu-content');
        var logoWrap = document.getElementById('logo-wrap');
        var logoBox = document.getElementById('logo-box');
        var container = document.querySelector('.barba-container');

        setTimeout(function() {
            hideDynamicLoad();
            init();
            closeMenu(logoWrap, logoBox, navItm, head, menu, menuClip, overlay);
            triggerResize();
            headerAnimate();

            TweenMax.to(
                container, .6, {
                    alpha: 1
                }
            );

        }, 500);

        setTimeout(function() {
            TweenMax.set(navTxt, {
                alpha: 1,
                ease: Expo.easeOut
            });
            triggerResize();
        }, 2000);

    }


}

function hideDynamicLoad() {
    var dynamicLoad = document.getElementById('dynamicLoad');
    var dynamicProgress = dynamicLoad.querySelector('.progress');



    setTimeout(function() {
        TweenMax.set(dynamicProgress, {
            css: {
                right: '0',
                left: 'auto'
            }
        });
        TweenMax.to(
            dynamicProgress, .5, {
                alpha: 1,
                width: '0',
                ease: Expo.easeInOut,
                onComplete: resetLeft()
            }
        );
    }, 500);



    function resetLeft() {
        setTimeout(function() {
            TweenMax.set(dynamicProgress, {
                css: {
                    left: '0',
                    right: 'auto'
                }
            });
            triggerResize();
        }, 1000);
    }

}



// page header

function headerAnimate() {

    var pageHeader = document.getElementById('section-header');
    if (pageHeader) {

        if (pageHeader.classList.contains("active")) return;

        pageHeader.classList.add('active');

        var itm = pageHeader.querySelectorAll('.q_split_wrap');
        var clipReveal = pageHeader.querySelectorAll('.rev_clip');
        var line = pageHeader.querySelectorAll('.line');

        var revealItems = document.querySelectorAll('.rev_item');
        TweenMax.set(revealItems, {
            alpha: 0
        });

        window.scroll(0, 0);

        if (itm) {
            q_animate(itm, 'stagTop', .6);
        }
        if (clipReveal.length > 0) {
            var w = clipReveal[0].clientWidth;
            TweenMax.fromTo(clipReveal, 1.8, {
                x: -50,
                clipPath: 'inset(0px ' + w + 'px 0px 0px)',
                webkitClipPath: 'inset(0px ' + w + 'px 0px 0px)'
            }, {
                x: 0,
                clipPath: 'inset(0px 0px 0px 0px)',
                webkitClipPath: 'inset(0px 0px 0px 0px)',
                ease: Expo.easeInOut
            })
        }
        if (line) {
            TweenMax.to(line, 1.8, {
                height: 240,
                delay: .3,
                ease: Expo.easeInOut
            })
        }

    }
}


function scrollTop() {
    var scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function(e) {
            window.scroll(0, 0);
        });
    }
}

function navMenu(logoWrap, logoBox) {
    var head = document.getElementById('main-logo');
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('menu-overlay');
    var navBtn = document.getElementById('nav');
    var menuClip = document.getElementById('menuClip');
    var clsBtn = document.getElementById('navClose');
    var navItm = document.querySelectorAll('.menu-item');

    navBtn.addEventListener('click', function(e) {
        openMenu(logoWrap, logoBox, navItm, head, menu, menuClip, overlay);
    });
    clsBtn.addEventListener('click', function(e) {
        closeMenu(logoWrap, logoBox, navItm, head, menu, menuClip, overlay);
    });
}

function openMenu(logoWrap, logoBox, navItm, head, menu, menuClip, overlay) {
    head.classList.add('menu-opened');
    menu.classList.add('active');
    logoWrap.classList.add('open');
    logoBox.classList.add('open');
    TweenMax.to(
        menuClip, .8, {
            width: '100%',
            ease: Expo.easeInOut
        }
    );
    TweenMax.to(
        overlay, .6, {
            width: '100%',
            ease: Expo.easeInOut
        }
    );
    TweenMax.staggerFromTo(
        navItm, .6, {
            alpha: .8,
            xPercent: -100
        }, {
            alpha: 1,
            xPercent: 0,
            ease: Expo.easeOut,
            delay: .3
        }, 0.08
    );
}

function closeMenu(logoWrap, logoBox, navItm, head, menu, menuClip, overlay) {
    head.classList.remove('menu-opened');
    menu.classList.remove('active');
    logoWrap.classList.remove('open');
    logoBox.classList.remove('open');
    TweenMax.to(
        overlay, 1, {
            width: '0',
            ease: Expo.easeInOut
        }
    );
    TweenMax.to(
        menuClip, .8, {
            width: '0%',
            ease: Expo.easeInOut
        }
    );
}









//Initialize Functions

function init() {

    // Global Elements

    var magnets = document.querySelectorAll('.q_magnet');
    var q_slide = document.getElementById('q_slide');
    var reveals = document.querySelectorAll('.reveal');
    var logoWrap = document.getElementById('logo-wrap');
    var logoBox = document.getElementById('logo-box');
    var footer = document.getElementById('footer');
    var header = document.getElementById('head');
    var copyrightYear = document.getElementById('year_copy');

    qReveal(reveals, logoWrap, logoBox, header);

    if (q_slide) {
        qSlide(q_slide)
    };
    if (magnets.length > 0) {
        qMagnet(magnets)
    }


    header.classList.remove('hide');

    window.scroll(0, 0);

    //headerAnimate();
    navMenu(logoWrap, logoBox);
    scrollTop();
    qCursor();

    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

        document.body.classList.remove("horizontal-scroll");

        if (document.getElementsByClassName('q_smooth').length) {
            var qSmooth = new Parallax({
                extends: true,
                touchMultiplier: 1.8,
                forceVS: !0,
                preload: true,
                native: true,
                section: document.querySelector('.q_smooth'),
                divs: document.querySelectorAll('.vs-div'),
            });
            qSmooth.init();
        }
        if (document.getElementsByClassName('q_horizontal').length) {
            document.body.classList.add("horizontal-scroll");
            var qHorizontal = new Horizontal({
                extends: true,
                preload: false,
                native: false,
                direction: 'horizontal',
                section: document.querySelector('.q_horizontal'),
                divs: document.querySelectorAll('.vsh')
            });
            qHorizontal.init();
        }

    }

    if (copyrightYear) {
        var d = new Date();
        copyrightYear.innerHTML = d.getFullYear();
    }
}


document.addEventListener("DOMContentLoaded", function() {

    Barba.Pjax.start();

});





// ---------- Custom Cursor + Section Tilt (Mousemove event) ---------- //



function qCursor() {

    var w = window;
    const b = document.getElementsByTagName("body")[0];
    b.addEventListener("mousemove", mouseMove);
    var cursor = document.getElementById('cursor');
    var cursor2 = document.getElementById('cursor2');
    var cursor3 = document.getElementById('cursor3');

    cursorUnhover();

    function mouseMove(e) {
        // Custom Cursor
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor2.style.left = e.clientX + 'px';
        cursor2.style.top = e.clientY + 'px';
        cursor3.style.left = e.clientX + 'px';
        cursor3.style.top = e.clientY + 'px';
    }

    function cursorHover(e) {
        cursor2.classList.add("hover");
        cursor3.classList.add("hover")
    }

    function cursorUnhover(e) {
        cursor2.classList.remove("hover");
        cursor3.classList.remove("hover");
    }


    var hovers = document.querySelectorAll(".hover-target");

    for (var i = hovers.length - 1; i >= 0; i--) {
        var hover = hovers[i];
        hoverHandler(hover);
    };

    function hoverHandler(hover) {
        hover.addEventListener("mouseover", cursorHover);
        hover.addEventListener("mouseout", cursorUnhover);
    }

};


//Barba Events


Barba.Dispatcher.on('linkClicked', function(el, e) {



    var head = document.getElementById('main-logo');
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('menu-overlay');
    var navBtn = document.getElementById('nav');
    var menuClip = document.getElementById('menuClip');
    var clsBtn = document.getElementById('navClose');
    var navItm = document.querySelectorAll('.menu-item');
    var navTxt = menuClip.querySelectorAll('.menu-content');
    var logoWrap = document.getElementById('logo-wrap');
    var logoBox = document.getElementById('logo-box');
    var header = document.getElementById('head');
    var header = document.getElementById('head');
    var container = document.querySelector('.barba-container');


    // Main Menu Click

    if (el.classList.contains("logo")) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    if (el.classList.contains("barba_nav")) {
        TweenMax.staggerTo(
            navItm, .6, {
                alpha: .8,
                xPercent: -100,
                ease: Expo.easeOut
            }, 0.05
        );
        TweenMax.to(
            navTxt, .6, {
                alpha: 0,
                ease: Expo.easeOut
            }
        );
    }

    TweenMax.to(
        container, .4, {
            alpha: 0
        }
    );

    showDynamicLoad();

});

Barba.Dispatcher.on('initStateChange', function() {
    if (typeof ga === 'function') {
        ga('send', 'pageview', location.pathname);
    }
});


Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {

    runDynamicLoad(container);


});

Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus) {



});




var HideShowTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.finish.bind(this));
    },

    fadeOut: function() {


    },

    finish: function() {
        this.newContainer.style.opacity = 0;
        this.done();
    }
});

Barba.Pjax.getTransition = function() {
    return HideShowTransition;
};








// Q ANIMATE

function q_animate(element, animation, delay) {

    if (animation === 'stagTop') {
        TweenMax.staggerFromTo(
            element, 1, {
                alpha: 0,
                y: 130
            }, {
                alpha: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: delay
            }, 0.15
        );
    }

    if (animation === 'fadeOut') {
        TweenMax.to(
            element, .3, {
                alpha: 0,
                ease: Power1.easeOut,
                delay: delay
            }, 0.15
        );
    }

    if (animation === 'stagLeft') {
        TweenMax.staggerFromTo(
            element, 1.5, {
                alpha: 0,
                x: 200
            }, {
                alpha: 1,
                x: 0,
                ease: Power4.easeOut,
                delay: delay
            }, 0.1
        );
    }

    if (animation === 'stagRight') {
        TweenMax.staggerFromTo(
            element, 1.5, {
                alpha: 0,
                x: -200
            }, {
                alpha: 1,
                x: 0,
                ease: Power4.easeOut,
                delay: delay
            }, 0.1
        );
    }

    if (animation === 'slideTop') {
        TweenMax.fromTo(
            element, 1.5, {
                alpha: 0,
                y: 50
            }, {
                alpha: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: delay
            }
        );
    }


    if (animation === 'slideLeft') {
        TweenMax.fromTo(
            element, 1.5, {
                alpha: 0,
                xPercent: -100
            }, {
                alpha: 1,
                xPercent: 0,
                ease: Expo.easeOut,
                delay: delay
            }
        );
    } else if (animation === 'sideLeft') {
        TweenMax.staggerFromTo(
            element, 1.5, {
                alpha: 0,
                x: 120
            }, {
                alpha: 1,
                x: 0,
                ease: Expo.easeOut,
                delay: delay
            }, 0.2
        );
    } else if (animation === 'clientLeft') {
        TweenMax.staggerFromTo(
            element, 1.5, {
                alpha: 0,
                x: 180
            }, {
                alpha: .6,
                x: 0,
                ease: Expo.easeOut,
                delay: delay
            }, 0.05
        );
    } else if (animation === 'sideRight') {
        TweenMax.staggerFromTo(
            element, 1.5, {
                alpha: 0,
                x: -120
            }, {
                alpha: 1,
                x: 0,
                ease: Expo.easeOut,
                delay: delay
            }, 0.2
        );
    } else if (animation === 'clipRight') {
        TweenMax.staggerTo(
            element, 1, {
                clipPath: 'inset(0px 0px 0px 0px)',
                ease: Expo.easeInOut,
                delay: delay
            }, 0.1
        );
    } else if (animation === 'splitLeft') {

        var content = element.textContent;
        var letters = content.split("");
        element.innerHTML = "";

        for (var idx = 0; idx < letters.length; idx++) {
            element.innerHTML += "<span>" + letters[idx] + "</span>";
        }

        var chars = element.querySelectorAll('span');

        TweenMax.set(chars, {
            x: 110,
            alpha: 0
        });

        setTimeout(function() {
            TweenMax.staggerTo(
                chars, 1.5, {
                    x: 0,
                    alpha: 1,
                    ease: Power4.easeInOut
                }, 0.03
            );
        }, delay);

    } else if (animation === 'splitRight') {

        var content = element.textContent;
        var letters = content.split("");
        element.innerHTML = "";

        for (var idx = 0; idx < letters.length; idx++) {
            element.innerHTML += "<span>" + letters[idx] + "</span>";
        }

        var chars = element.querySelectorAll('span');

        TweenMax.set(chars, {
            x: -110,
            alpha: 0
        });

        setTimeout(function() {
            TweenMax.staggerTo(
                chars, 1.5, {
                    x: 0,
                    alpha: 1,
                    ease: Power4.easeInOut
                }, -0.02
            );
        }, delay);

    }

};


// split text animation

function animateText() {
    var lettr = document.getElementById("lettr");
    var lines = lettr.querySelectorAll('font');
    for (var x = lines.length - 1; x >= 0; x--) {
        var line = lines[x];
        lineHandler(line);
    };

    function lineHandler(line) {
        var text = line.textContent;
        var wordSplit = text.split("");
        line.innerHTML = "";
        for (w = 0; w < wordSplit.length; w++) {
            line.innerHTML += "<span>" + wordSplit[w] + "</span>";
        }
        chars = line.querySelectorAll('span');
        for (var x = chars.length - 1; x >= 0; x--) {
            var char = chars[x];
            charHandler(char, x);
        };

        function charHandler(char, x) {
            char.style.transitionDelay = x * .1 + "s";
        }
    }
}

// ----- Q MAGNET ----- //


function qMagnet(magnets) {

    if (window.innerWidth > 540) {

        for (var i = magnets.length - 1; i >= 0; i--) {
            var magnet = magnets[i];

            var friction = magnet.getAttribute('friction') || .3;

            magnet.addEventListener("mouseover", function() {
                this.classList.add('hovered');
            });
            magnet.addEventListener("mouseout", function() {
                this.classList.remove('hovered');
                this.style.transform = 'translate(0px, 0px)';

            });

            magnet.addEventListener("mousemove", function(e) {

                const bounds = this.getBoundingClientRect();
                const centerX = bounds.left + (bounds.width / 2);
                const centerY = bounds.top + (bounds.height / 2);

                const deltaX = Math.floor((centerX - e.clientX)) * friction * -1;
                const deltaY = Math.floor((centerY - e.clientY)) * friction * -1;

                //this.style.transform = 'translate('+deltaX+'px, '+deltaY+'px)';

                TweenMax.to(this, 0, {
                    x: deltaX,
                    y: deltaY,
                });


            });
        };

    };

}



// ----- Q REVEAL ----- //






function animateReveal(e) {
    var container = e[0].target;
    var revealItems = container.querySelectorAll('.rev_item');


    if (revealItems.length > 0) {
        if (container.classList.contains("q_active")) {
            q_animate(revealItems, 'stagTop', .3);
        } else {
            TweenMax.to(revealItems, .5, {
                alpha: 0
            });
        }
    }

    var revealLines = container.querySelectorAll('.rev_line');

    if (revealLines.length > 0) {
        if (container.classList.contains("q_active")) {
            TweenMax.to(revealLines[0], 1.2, {
                x: 0,
                width: 72,
                ease: Expo.easeInOut
            })
        } else {
            TweenMax.to(revealLines[0], 1.2, {
                x: 100,
                width: 0,
                ease: Expo.easeInOut
            })
        }
    }

    var revealItemsDelay = container.querySelectorAll('.rev_item_delay');

    if (revealItemsDelay.length > 0) {
        if (container.classList.contains("q_active")) {
            q_animate(revealItemsDelay, 'stagTop', .5);
        } else {
            TweenMax.to(revealItemsDelay, .5, {
                alpha: 0
            });
        }
    }

    // image clipping mask reveal  

    var clipReveal = container.querySelectorAll('.rev_clip');

    if (clipReveal.length > 0) {
        var w = clipReveal[0].clientWidth;
        if (container.classList.contains("q_active")) {

            if (clipReveal[0].classList.contains('delay')) {
                TweenMax.fromTo(clipReveal, 1.2, {
                    x: -100,
                    alpha: 1,
                    clipPath: 'inset(0px ' + w + 'px 0px 0px)',
                    webkitClipPath: 'inset(0px ' + w + 'px 0px 0px)'
                }, {
                    x: 0,
                    alpha: 1,
                    clipPath: 'inset(0px 0px 0px 0px)',
                    webkitClipPath: 'inset(0px 0px 0px 0px)',
                    ease: Expo.easeInOut,
                    delay: .15
                })
            } else {
                TweenMax.fromTo(clipReveal, 1.8, {
                    x: -100,
                    alpha: 1,
                    clipPath: 'inset(0px ' + w + 'px 0px 0px)',
                    webkitClipPath: 'inset(0px ' + w + 'px 0px 0px)'
                }, {
                    x: 0,
                    alpha: 1,
                    clipPath: 'inset(0px 0px 0px 0px)',
                    webkitClipPath: 'inset(0px 0px 0px 0px)',
                    ease: Expo.easeInOut
                })
            }


        } else {
            TweenMax.to(clipReveal, 1, {
                alpha: 0,
                x: -50,
                ease: Power4.easeInOut
            })
        }
    }

    var scaleReveal = container.querySelectorAll('.rev_scale');

    if (scaleReveal.length > 0) {
        var obj = scaleReveal[0];
        if (container.classList.contains("q_active")) {
            TweenMax.fromTo(obj, 2.8, {
                css: {
                    scale: 1.3,
                    opacity: .5
                }
            }, {
                css: {
                    scale: 1,
                    opacity: 1
                },
                ease: Power3.easeOut
            })
        } else {
            TweenMax.to(obj, 1, {
                css: {
                    scale: 1.3,
                    opacity: .5
                },
                ease: Power3.easeIn
            })
        }
    }

    var letterReveal = container.querySelectorAll('.rev_letter');

    if (letterReveal.length > 0) {
        var obj = letterReveal[0];
        if (container.classList.contains("q_active")) {
            q_animate(obj, 'splitLeft', .6);
        }
    }

    var clientReveal = container.querySelectorAll('.rev_client');

    if (clientReveal.length > 0) {
        if (container.classList.contains("q_active")) {
            q_animate(clientReveal, 'clientLeft', .6);
        }
    }


}


function qReveal(reveals, logoWrap, logoBox, footer, header) {

    var allRevealItems = document.querySelectorAll('.rev_item');
    TweenMax.set(allRevealItems, {
        alpha: 0
    });

    if (reveals.length > 0) {

        for (var i = reveals.length - 1; i >= 0; i--) {

            var revealContainer = reveals[i];
            var revealItems = revealContainer.querySelectorAll('.rev_item');

            // Animate reveal on class change
            var observer = new MutationObserver(function(revealContainer) {
                animateReveal(revealContainer);
            })
            // Class change event listener
            observer.observe(revealContainer, {
                attributes: true,
                attributeFilter: ['class'],
                childList: false,
                characterData: false
            })
        };

        window.addEventListener('scroll', function() {
            qRevealScroll(reveals, logoWrap, logoBox, footer, header);
        });

    }

}




function qRevealScroll(reveals, logoWrap, logoBox, header) {
    var scrollPos = window.scrollY;


    for (var i = reveals.length - 1; i >= 0; i--) {
        var revealContainer = reveals[i];
        revealHandler(revealContainer, scrollPos);
    };

    function revealHandler(revealContainer, scrollPos) {
        var elemTop = revealContainer.offsetTop - (window.innerHeight / 1.2) + 100;
        var elemBtm = elemTop + (revealContainer.clientHeight * 1.5);
        var revealItems = revealContainer.querySelectorAll('.rev_item');


        if (scrollPos > 100) {

            logoWrap.classList.add('active');
            logoBox.classList.add('active');
        } else if (scrollPos < 100) {
            logoWrap.classList.remove('active');
            logoBox.classList.remove('active');
        }


        if (scrollPos < 10) {
            if (!revealContainer.classList.contains("q_active")) return;
            revealContainer.classList.remove("q_active");
        } else {
            if (scrollPos > elemTop) {
                if (revealContainer.classList.contains("q_active")) return;
                revealContainer.classList.add("q_active");
            }

            var footer = document.getElementById('footer');

            if (footer) {
                var footerTop = footer.offsetTop - (window.innerHeight / 2);
                if (scrollPos > footerTop) {
                    if (menu.classList.contains("active")) return;
                    header.classList.add('hide');
                } else if (scrollPos < footerTop) {
                    header.classList.remove('hide');
                }
            }
        }



    }
}














// ----- Q SLIDE ----- //


function qSlide(q_slide) {

    q_slide.classList.add('q_slide');

    // global vars

    var slides = q_slide.querySelectorAll('.slide');
    var pagination = q_slide.querySelector('.pagination');
    var bar = document.getElementById('bar');

    // trigger resize

    function triggerResize() {
        var ev = document.createEvent('HTMLEvents');
        ev.initEvent('resize', true, false);
        window.dispatchEvent(ev);
    };

    // autoplay function

    function autoPlay() {
        if (q_slide.getAttribute('autoplay') != null) {
            var q_slideDuration = q_slide.getAttribute('autoplay') || 4000;
            if (bar) {
                progressBar();
            }

            var timeout = setTimeout(function() {
                q_slideNext(q_slide, false, true);
            }, q_slideDuration);
        }
    };

    // progress bar function

    function progressBar() {

        var q_slideDuration = q_slide.getAttribute('autoplay') || 4000;


        TweenMax.fromTo(
            bar, (q_slideDuration / 1000), {
                height: '0%'
            }, {
                height: '100%'
            }
        );


    };

    // parallax init

    var q_slideFriction = 1; // no parallax
    if (q_slide.getAttribute('parallax') != null) {
        var q_slideFriction = q_slide.getAttribute('parallax') || 0.25;
    }

    // opacity init

    if (q_slide.getAttribute('opacity') != null) {
        var slideOpacity = q_slide.getAttribute('opacity') || 0.6;
    }

    // pagination update function

    function pageUpdate() {
        if (pagination) {
            var pages = pagination.querySelectorAll('.item');
            var activePage = pagination.querySelector('.q_current');
            var newSlide = q_slide.querySelector('.is-new');
            var index = indexInParent(newSlide);

            activePage.classList.remove('q_current');
            pages[index].classList.add('q_current');
        }
    }


    // switch slide function

    function q_slideSwitch(q_slide, index, auto) {



        if (q_slide.getAttribute('wait') === 'true') return;

        var captions = q_slide.querySelectorAll('.slide-content');

        var activeSlide = q_slide.querySelector('.q_current');
        var activeSlideImage = activeSlide.querySelector('.image-container');
        var newSlide = eq.call(slides, index);
        var index = indexInParent(newSlide);
        var newSlideImage = newSlide.querySelector('.image-container');
        var newSlideContent = newSlide.querySelector('.slide-content') || captions[index];
        var allSlideElements = q_slide.querySelectorAll('.q_split_wrap');
        if (newSlideContent) {
            var newSlideElements = newSlideContent.querySelectorAll('.q_split_wrap');
        }


        if (newSlide === activeSlide) return;

        newSlide.classList.add('is-new');

        var timeout = 0;
        clearTimeout(timeout);
        pageUpdate();



        q_slide.setAttribute('wait', 'true');

        if (indexInParent(newSlide) > indexInParent(activeSlide)) {
            // next slide
            var newSlideRight = 0;
            var newSlideLeft = 'auto';
            var newSlideImageLeft = -q_slide.clientWidth * (1 - q_slideFriction) + 'px';
            var newSlideContentLeft = 'auto';
            var newSlideContentRight = 0;
            var activeSlideImageLeft = -q_slide.clientWidth * q_slideFriction + 'px';
            var sideAnim = 'sideLeft';
            var splitAnim = 'splitLeft';
            var slideAnim = 'stagLeft';
        } else {
            // prev slide
            var newSlideRight = '';
            var newSlideLeft = 0;
            var newSlideImageLeft = -q_slide.clientWidth * q_slideFriction + 'px';
            var newSlideContentLeft = 0;
            var newSlideContentRight = 'auto';
            var activeSlideImageLeft = q_slide.clientWidth * q_slideFriction + 'px';
            var sideAnim = 'sideRight';
            var splitAnim = 'splitRight';
            var slideAnim = 'stagRight';

        }

        newSlide.style.display = 'block';
        newSlide.style.width = 0;
        newSlide.style.right = newSlideRight;
        newSlide.style.left = newSlideLeft;
        newSlide.style.zIndex = 2;

        newSlideImage.style.width = q_slide.clientWidth + 'px';
        activeSlideImage.style.transform = 'translateX(0)';

        TweenMax.set(newSlideImage, {
            x: newSlideImageLeft
        });

        if (slideOpacity) {
            newSlideImage.style.opacity = slideOpacity;
        }

        if (newSlideContent) {
            newSlideContent.style.width = q_slide.clientWidth + 'px';
            newSlideContent.style.right = newSlideContentRight;
            newSlideContent.style.left = newSlideContentLeft;
        }

        if (slideOpacity) {
            TweenMax.to(activeSlideImage, 1.5, {
                x: activeSlideImageLeft,
                opacity: slideOpacity,
                ease: Expo.easeInOut
            });
        } else {
            TweenMax.to(activeSlideImage, 1.5, {
                x: activeSlideImageLeft,
                ease: Expo.easeInOut
            });
        };



        TweenMax.to(newSlide, 1.5, {
            width: q_slide.clientWidth,
            ease: Expo.easeInOut
        });

        if (bar) {
            setTimeout(function() {
                TweenMax.set(bar, {
                    height: '0%'
                });
            }, 800);
        }



        TweenMax.to(newSlideImage, 1.5, {
            x: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            onComplete: function() {
                // switch active class
                newSlide.classList.add('q_current');
                newSlide.classList.remove('is-new');
                activeSlide.classList.remove('q_current');
                newSlide.removeAttribute('style');
                // reset all styles
                newSlideImage.removeAttribute('style');
                if (newSlideContent) {
                    newSlideContent.removeAttribute('style');
                }
                activeSlideImage.removeAttribute('style');
                q_slide.setAttribute('wait', 'false');



                if (auto) {
                    autoPlay()
                }
            }
        });


        // caption animation

        if (q_slide.getAttribute('animate') != null) {
            var animation = q_slide.getAttribute('animate') || 'stagTop';
            q_animate(allSlideElements, 'fadeOut', .5);
            q_animate(newSlideElements, animation, .6);
        };

    }


    // next/prev slide switch calls

    function q_slideNext(q_slide, previous, auto) {

        var activeSlide = q_slide.querySelector('.q_current');
        var newSlide = null;
        if (previous) {
            newSlide = activeSlide.previousElementSibling;
            if (!newSlide) {
                newSlide = slides[slides.length - 1];
            }
        } else {
            newSlide = activeSlide.nextElementSibling;
            if (!newSlide)
                newSlide = slides[0];
        }
        q_slideSwitch(q_slide, indexInParent(newSlide), auto);

        triggerResize();

    }




    for (var i = slides.length - 1; i >= 0; i--) {
        var slide = slides[i];
        slide.classList.add('is-loaded');
    };

    // arrows click event

    var arrows = q_slide.querySelector('.arrows');

    if (arrows) {
        var next = arrows.querySelector('.next');
        var prev = arrows.querySelector('.prev');

        next.addEventListener('click', function(e) {
            q_slideNext(q_slide, false);
        });
        prev.addEventListener('click', function(e) {
            q_slideNext(q_slide, true);
        });
    }

    // pagination click event

    if (pagination) {
        var pages = pagination.querySelectorAll('.item');
        for (var i = pages.length - 1; i >= 0; i--) {
            var page = pages[i];
            page.addEventListener('click', function(e) {
                q_slideSwitch(q_slide, indexInParent(e.target));
                triggerResize();
            })
        };
    }

    autoPlay(); // autoplay init




    // ----- SLIDESHOW PLUGINS ----- //

    // mousemove background animation

    if (q_slide.getAttribute('mousefollow') != null) {
        if (window.innerWidth > 540) {
            for (var i = slides.length - 1; i >= 0; i--) {
                var slide = slides[i].querySelector('.image-wrapper');
                TweenMax.set(slide, {
                    scale: 1.1
                });
            }

            function moveBackground(e) {
                var lMouseX = Math.max(-100, Math.min(100, q_slide.clientWidth / 2 - e.clientX));
                var lMouseY = Math.max(-100, Math.min(100, q_slide.clientHeight / 2 - e.clientY));
                x = (25 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
                y = (15 * lMouseY) / 100;
                for (var i = slides.length - 1; i >= 0; i--) {
                    var slide = slides[i].querySelector('.image-wrapper');
                    TweenMax.to(slide, 3, {
                        autoAlpha: 1,
                        x: x,
                        y: y,
                        ease: Power1.easeOut
                    });
                };
            }
            q_slide.onmousemove = function(e) {
                moveBackground(e)
            };
        };
    }



};

(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        var _domClasses = require('dom-classes');

        var _domClasses2 = _interopRequireDefault(_domClasses);

        var _domCreateElement = require('dom-create-element');

        var _domCreateElement2 = _interopRequireDefault(_domCreateElement);

        var _prefix = require('prefix');

        var _prefix2 = _interopRequireDefault(_prefix);

        var _virtualScroll = require('virtual-scroll');

        var _virtualScroll2 = _interopRequireDefault(_virtualScroll);

        var _domEvents = require('dom-events');

        var _domEvents2 = _interopRequireDefault(_domEvents);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Smooth = function() {
            function Smooth() {
                var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                _classCallCheck(this, Smooth);

                this.createBound();
                this.options = opt;
                this.prefix = (0, _prefix2.default)('transform');
                this.rAF = undefined;
                // It seems that under heavy load, Firefox will still call the RAF callback even though the RAF has been canceled
                // To prevent that we set a flag to prevent any callback to be executed when RAF is removed
                this.isRAFCanceled = false;
                var constructorName = this.constructor.name ? this.constructor.name : 'Smooth';
                this.extends = typeof opt.extends === 'undefined' ? this.constructor !== Smooth : opt.extends;
                this.callback = this.options.callback || null;
                this.vars = {
                    direction: this.options.direction || 'vertical',
                    native: this.options.native || false,
                    ease: this.options.ease || 0.075,
                    preload: this.options.preload || false,
                    current: 0,
                    last: 0,
                    target: 0,
                    height: window.innerHeight,
                    width: window.innerWidth,
                    bounding: 0,
                    timer: null,
                    ticking: false
                };
                this.vs = this.vars.native ? null : new _virtualScroll2.default({
                    limitInertia: this.options.vs && this.options.vs.limitInertia || false,
                    mouseMultiplier: this.options.vs && this.options.vs.mouseMultiplier || 1,
                    touchMultiplier: this.options.vs && this.options.vs.touchMultiplier || 1.5,
                    firefoxMultiplier: this.options.vs && this.options.vs.firefoxMultiplier || 30,
                    preventTouch: this.options.vs && this.options.vs.preventTouch || true
                });
                this.dom = {
                    listener: this.options.listener || document.body,
                    section: this.options.section || document.querySelector('.vs-section') || null,
                    scrollbar: this.vars.native || this.options.noscrollbar ? null : {
                        state: {
                            clicked: false,
                            x: 0
                        },
                        el: (0, _domCreateElement2.default)({
                            selector: 'div',
                            styles: 'vs-scrollbar vs-' + this.vars.direction + ' vs-scrollbar-' + constructorName.toLowerCase()
                        }),
                        drag: {
                            el: (0, _domCreateElement2.default)({
                                selector: 'div',
                                styles: 'vs-scrolldrag'
                            }),
                            delta: 0,
                            height: 50
                        }
                    }
                };
            }

            _createClass(Smooth, [{
                key: 'createBound',
                value: function createBound() {
                    var _this = this;

                    ['run', 'calc', 'debounce', 'resize', 'mouseUp', 'mouseDown', 'mouseMove', 'calcScroll', 'scrollTo'].forEach(function(fn) {
                        return _this[fn] = _this[fn].bind(_this);
                    });
                }
            }, {
                key: 'init',
                value: function init() {
                    this.addClasses();
                    this.vars.preload && this.preloadImages();
                    this.vars.native ? this.addFakeScrollHeight() : !this.options.noscrollbar && this.addFakeScrollBar();
                    this.addEvents();
                    this.resize();
                }
            }, {
                key: 'addClasses',
                value: function addClasses() {
                    var type = this.vars.native ? 'native' : 'virtual';
                    var direction = this.vars.direction === 'vertical' ? 'y' : 'x';
                    _domClasses2.default.add(this.dom.listener, 'is-' + type + '-scroll');
                    _domClasses2.default.add(this.dom.listener, direction + '-scroll');
                }
            }, {
                key: 'preloadImages',
                value: function preloadImages() {
                    var _this2 = this;

                    var images = Array.prototype.slice.call(this.dom.listener.querySelectorAll('img'), 0);
                    images.forEach(function(image) {
                        var img = document.createElement('img');
                        _domEvents2.default.once(img, 'load', function() {
                            images.splice(images.indexOf(image), 1);
                            images.length === 0 && _this2.resize();
                        });
                        img.src = image.getAttribute('src');
                    });
                }
            }, {
                key: 'calc',
                value: function calc(e) {
                    var delta = e.deltaY;
                    this.vars.target += delta * -1;
                    this.clampTarget();
                }
            }, {
                key: 'debounce',
                value: function debounce() {
                    var _this3 = this;

                    var win = this.dom.listener === document.body;
                    this.vars.target = this.vars.direction === 'vertical' ? win ? window.scrollY || window.pageYOffset : this.dom.listener.scrollTop : win ? window.scrollX || window.pageXOffset : this.dom.listener.scrollLeft;
                    clearTimeout(this.vars.timer);
                    if (!this.vars.ticking) {
                        this.vars.ticking = true;
                        _domClasses2.default.add(this.dom.listener, 'is-scrolling');
                    }
                    this.vars.timer = setTimeout(function() {
                        _this3.vars.ticking = false;
                        _domClasses2.default.remove(_this3.dom.listener, 'is-scrolling');
                    }, 200);
                }
            }, {
                key: 'run',
                value: function run() {
                    if (this.isRAFCanceled) return;
                    this.vars.current += (this.vars.target - this.vars.current) * this.vars.ease;
                    this.vars.current < .1 && (this.vars.current = 0);
                    this.requestAnimationFrame();
                    if (!this.extends) {
                        this.dom.section.style[this.prefix] = this.getTransform(-this.vars.current.toFixed(2));
                    }
                    if (!this.vars.native && !this.options.noscrollbar) {
                        var size = this.dom.scrollbar.drag.height;
                        var bounds = this.vars.direction === 'vertical' ? this.vars.height : this.vars.width;
                        var value = Math.abs(this.vars.current) / (this.vars.bounding / (bounds - size)) + size / .5 - size;
                        var clamp = Math.max(0, Math.min(value - size, value + size));
                        this.dom.scrollbar.drag.el.style[this.prefix] = this.getTransform(clamp.toFixed(2));
                    }
                    if (this.callback && this.vars.current !== this.vars.last) {
                        this.callback(this.vars.current);
                    }
                    this.vars.last = this.vars.current;
                }
            }, {
                key: 'getTransform',
                value: function getTransform(value) {
                    return this.vars.direction === 'vertical' ? 'translate3d(0,' + value + 'px,0)' : 'translate3d(' + value + 'px,0,0)';
                }
            }, {
                key: 'on',
                value: function on() {
                    var requestAnimationFrame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                    if (this.isRAFCanceled) {
                        this.isRAFCanceled = false;
                    }
                    var node = this.dom.listener === document.body ? window : this.dom.listener;
                    this.vars.native ? _domEvents2.default.on(node, 'scroll', this.debounce) : this.vs && this.vs.on(this.calc);
                    requestAnimationFrame && this.requestAnimationFrame();
                }
            }, {
                key: 'off',
                value: function off() {
                    var cancelAnimationFrame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                    var node = this.dom.listener === document.body ? window : this.dom.listener;
                    this.vars.native ? _domEvents2.default.off(node, 'scroll', this.debounce) : this.vs && this.vs.off(this.calc);
                    cancelAnimationFrame && this.cancelAnimationFrame();
                }
            }, {
                key: 'requestAnimationFrame',
                value: function(_requestAnimationFrame) {
                    function requestAnimationFrame() {
                        return _requestAnimationFrame.apply(this, arguments);
                    }

                    requestAnimationFrame.toString = function() {
                        return _requestAnimationFrame.toString();
                    };

                    return requestAnimationFrame;
                }(function() {
                    this.rAF = requestAnimationFrame(this.run);
                })
            }, {
                key: 'cancelAnimationFrame',
                value: function(_cancelAnimationFrame) {
                    function cancelAnimationFrame() {
                        return _cancelAnimationFrame.apply(this, arguments);
                    }

                    cancelAnimationFrame.toString = function() {
                        return _cancelAnimationFrame.toString();
                    };

                    return cancelAnimationFrame;
                }(function() {
                    this.isRAFCanceled = true;
                    cancelAnimationFrame(this.rAF);
                })
            }, {
                key: 'addEvents',
                value: function addEvents() {
                    this.on();
                    _domEvents2.default.on(window, 'resize', this.resize);
                }
            }, {
                key: 'removeEvents',
                value: function removeEvents() {
                    this.off();
                    _domEvents2.default.off(window, 'resize', this.resize);
                }
            }, {
                key: 'addFakeScrollBar',
                value: function addFakeScrollBar() {
                    this.dom.listener.appendChild(this.dom.scrollbar.el);
                    this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el);
                    _domEvents2.default.on(this.dom.scrollbar.el, 'click', this.calcScroll);
                    _domEvents2.default.on(this.dom.scrollbar.el, 'mousedown', this.mouseDown);
                    _domEvents2.default.on(document, 'mousemove', this.mouseMove);
                    _domEvents2.default.on(document, 'mouseup', this.mouseUp);
                }
            }, {
                key: 'removeFakeScrollBar',
                value: function removeFakeScrollBar() {
                    _domEvents2.default.off(this.dom.scrollbar.el, 'click', this.calcScroll);
                    _domEvents2.default.off(this.dom.scrollbar.el, 'mousedown', this.mouseDown);
                    _domEvents2.default.off(document, 'mousemove', this.mouseMove);
                    _domEvents2.default.off(document, 'mouseup', this.mouseUp);
                    this.dom.listener.removeChild(this.dom.scrollbar.el);
                }
            }, {
                key: 'mouseDown',
                value: function mouseDown(e) {
                    e.preventDefault();
                    e.which == 1 && (this.dom.scrollbar.state.clicked = true);
                }
            }, {
                key: 'mouseUp',
                value: function mouseUp(e) {
                    this.dom.scrollbar.state.clicked = false;
                    _domClasses2.default.remove(this.dom.listener, 'is-dragging');
                }
            }, {
                key: 'mouseMove',
                value: function mouseMove(e) {
                    this.dom.scrollbar.state.clicked && this.calcScroll(e);
                }
            }, {
                key: 'addFakeScrollHeight',
                value: function addFakeScrollHeight() {
                    this.dom.scroll = (0, _domCreateElement2.default)({
                        selector: 'div',
                        styles: 'vs-scroll-view'
                    });
                    this.dom.listener.appendChild(this.dom.scroll);
                }
            }, {
                key: 'removeFakeScrollHeight',
                value: function removeFakeScrollHeight() {
                    this.dom.listener.removeChild(this.dom.scroll);
                }
            }, {
                key: 'calcScroll',
                value: function calcScroll(e) {
                    var client = this.vars.direction == 'vertical' ? e.clientY : e.clientX;
                    var bounds = this.vars.direction == 'vertical' ? this.vars.height : this.vars.width;
                    var delta = client * (this.vars.bounding / bounds);
                    _domClasses2.default.add(this.dom.listener, 'is-dragging');
                    this.vars.target = delta;
                    this.clampTarget();
                    this.dom.scrollbar && (this.dom.scrollbar.drag.delta = this.vars.target);
                }
            }, {
                key: 'scrollTo',
                value: function scrollTo(offset) {
                    if (this.vars.native) {
                        this.vars.direction == 'vertical' ? window.scrollTo(0, offset) : window.scrollTo(offset, 0);
                    } else {
                        this.vars.target = offset;
                        this.clampTarget();
                    }
                }
            }, {
                key: 'resize',
                value: function resize() {
                    var prop = this.vars.direction === 'vertical' ? 'height' : 'width';
                    this.vars.height = window.innerHeight;
                    this.vars.width = window.innerWidth;
                    if (!this.extends) {
                        var bounding = this.dom.section.getBoundingClientRect();
                        this.vars.bounding = this.vars.direction === 'vertical' ? bounding.height - (this.vars.native ? 0 : this.vars.height) : bounding.right - (this.vars.native ? 0 : this.vars.width);
                    }
                    if (!this.vars.native && !this.options.noscrollbar) {
                        this.dom.scrollbar.drag.height = this.vars.height * (this.vars.height / (this.vars.bounding + this.vars.height));
                        this.dom.scrollbar.drag.el.style[prop] = this.dom.scrollbar.drag.height + 'px';
                    } else if (this.vars.native) {
                        this.dom.scroll.style[prop] = this.vars.bounding + 'px';
                    }!this.vars.native && this.clampTarget();
                }
            }, {
                key: 'clampTarget',
                value: function clampTarget() {
                    this.vars.target = Math.round(Math.max(0, Math.min(this.vars.target, this.vars.bounding)));
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    if (this.vars.native) {
                        _domClasses2.default.remove(this.dom.listener, 'is-native-scroll');
                        this.removeFakeScrollHeight();
                    } else {
                        _domClasses2.default.remove(this.dom.listener, 'is-virtual-scroll');
                        !this.options.noscrollbar && this.removeFakeScrollBar();
                    }
                    this.vars.direction === 'vertical' ? _domClasses2.default.remove(this.dom.listener, 'y-scroll') : _domClasses2.default.remove(this.dom.listener, 'x-scroll');
                    this.vars.current = 0;
                    this.vs && (this.vs.destroy(), this.vs = null);
                    this.removeEvents();
                }
            }]);

            return Smooth;
        }();

        exports.default = Smooth;


        window.Smooth = Smooth;

    }, {
        "dom-classes": 3,
        "dom-create-element": 4,
        "dom-events": 5,
        "prefix": 9,
        "virtual-scroll": 15
    }],
    2: [function(require, module, exports) {
        'use strict';

        var toString = Object.prototype.toString,
            hasOwnProperty = Object.prototype.hasOwnProperty;

        module.exports = function(object) {
            if (!object) return console.warn('bindAll requires at least one argument.');

            var functions = Array.prototype.slice.call(arguments, 1);

            if (functions.length === 0) {

                for (var method in object) {
                    if (hasOwnProperty.call(object, method)) {
                        if (typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
                            functions.push(method);
                        }
                    }
                }
            }

            for (var i = 0; i < functions.length; i++) {
                var f = functions[i];
                object[f] = bind(object[f], object);
            }
        };

        /*
            Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
            bindAll is only needed for events binding so no need to make slow fixes for constructor
            or partial application.
        */
        function bind(func, context) {
            return function() {
                return func.apply(context, arguments);
            };
        }
    }, {}],
    3: [function(require, module, exports) {
        /**
         * Module dependencies.
         */

        var index = require('indexof');

        /**
         * Whitespace regexp.
         */

        var whitespaceRe = /\s+/;

        /**
         * toString reference.
         */

        var toString = Object.prototype.toString;

        module.exports = classes;
        module.exports.add = add;
        module.exports.contains = has;
        module.exports.has = has;
        module.exports.toggle = toggle;
        module.exports.remove = remove;
        module.exports.removeMatching = removeMatching;

        function classes(el) {
            if (el.classList) {
                return el.classList;
            }

            var str = el.className.replace(/^\s+|\s+$/g, '');
            var arr = str.split(whitespaceRe);
            if ('' === arr[0]) arr.shift();
            return arr;
        }

        function add(el, name) {
            // classList
            if (el.classList) {
                el.classList.add(name);
                return;
            }

            // fallback
            var arr = classes(el);
            var i = index(arr, name);
            if (!~i) arr.push(name);
            el.className = arr.join(' ');
        }

        function has(el, name) {
            return el.classList ?
                el.classList.contains(name) :
                !!~index(classes(el), name);
        }

        function remove(el, name) {
            if ('[object RegExp]' == toString.call(name)) {
                return removeMatching(el, name);
            }

            // classList
            if (el.classList) {
                el.classList.remove(name);
                return;
            }

            // fallback
            var arr = classes(el);
            var i = index(arr, name);
            if (~i) arr.splice(i, 1);
            el.className = arr.join(' ');
        }

        function removeMatching(el, re, ref) {
            var arr = Array.prototype.slice.call(classes(el));
            for (var i = 0; i < arr.length; i++) {
                if (re.test(arr[i])) {
                    remove(el, arr[i]);
                }
            }
        }

        function toggle(el, name) {
            // classList
            if (el.classList) {
                return el.classList.toggle(name);
            }

            // fallback
            if (has(el, name)) {
                remove(el, name);
            } else {
                add(el, name);
            }
        }

    }, {
        "indexof": 6
    }],
    4: [function(require, module, exports) {
        /*
        `dom-create-element`
        var create = require('dom-create-element');
        var el = create({
          selector: 'div',
          styles: 'preloader',
          html: '<span>Text</span>'
        });
        */

        module.exports = create;

        function create(opt) {

            opt = opt || {};

            var el = document.createElement(opt.selector);

            if (opt.attr)
                for (var index in opt.attr)
                    opt.attr.hasOwnProperty(index) && el.setAttribute(index, opt.attr[index]);

            "a" == opt.selector && opt.link && (
                el.href = opt.link,
                opt.target && el.setAttribute("target", opt.target)
            );

            "img" == opt.selector && opt.src && (
                el.src = opt.src,
                opt.lazyload && (
                    el.style.opacity = 0,
                    el.onload = function() {
                        el.style.opacity = 1;
                    }
                )
            );

            opt.id && (el.id = opt.id);
            opt.styles && (el.className = opt.styles);

            opt.html && (el.innerHTML = opt.html);
            opt.children && (el.appendChild(opt.children));

            return el;
        };
    }, {}],
    5: [function(require, module, exports) {

        var synth = require('synthetic-dom-events');

        var on = function(element, name, fn, capture) {
            return element.addEventListener(name, fn, capture || false);
        };

        var off = function(element, name, fn, capture) {
            return element.removeEventListener(name, fn, capture || false);
        };

        var once = function(element, name, fn, capture) {
            function tmp(ev) {
                off(element, name, tmp, capture);
                fn(ev);
            }
            on(element, name, tmp, capture);
        };

        var emit = function(element, name, opt) {
            var ev = synth(name, opt);
            element.dispatchEvent(ev);
        };

        if (!document.addEventListener) {
            on = function(element, name, fn) {
                return element.attachEvent('on' + name, fn);
            };
        }

        if (!document.removeEventListener) {
            off = function(element, name, fn) {
                return element.detachEvent('on' + name, fn);
            };
        }

        if (!document.dispatchEvent) {
            emit = function(element, name, opt) {
                var ev = synth(name, opt);
                return element.fireEvent('on' + ev.type, ev);
            };
        }

        module.exports = {
            on: on,
            off: off,
            once: once,
            emit: emit
        };

    }, {
        "synthetic-dom-events": 10
    }],
    6: [function(require, module, exports) {

        var indexOf = [].indexOf;

        module.exports = function(arr, obj) {
            if (indexOf) return arr.indexOf(obj);
            for (var i = 0; i < arr.length; ++i) {
                if (arr[i] === obj) return i;
            }
            return -1;
        };
    }, {}],
    7: [function(require, module, exports) {
        // Generated by CoffeeScript 1.9.2
        (function() {
            var root;

            root = typeof exports !== "undefined" && exports !== null ? exports : this;

            root.Lethargy = (function() {
                function Lethargy(stability, sensitivity, tolerance, delay) {
                    this.stability = stability != null ? Math.abs(stability) : 8;
                    this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
                    this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
                    this.delay = delay != null ? delay : 150;
                    this.lastUpDeltas = (function() {
                        var i, ref, results;
                        results = [];
                        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
                            results.push(null);
                        }
                        return results;
                    }).call(this);
                    this.lastDownDeltas = (function() {
                        var i, ref, results;
                        results = [];
                        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
                            results.push(null);
                        }
                        return results;
                    }).call(this);
                    this.deltasTimestamp = (function() {
                        var i, ref, results;
                        results = [];
                        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
                            results.push(null);
                        }
                        return results;
                    }).call(this);
                }

                Lethargy.prototype.check = function(e) {
                    var lastDelta;
                    e = e.originalEvent || e;
                    if (e.wheelDelta != null) {
                        lastDelta = e.wheelDelta;
                    } else if (e.deltaY != null) {
                        lastDelta = e.deltaY * -40;
                    } else if ((e.detail != null) || e.detail === 0) {
                        lastDelta = e.detail * -40;
                    }
                    this.deltasTimestamp.push(Date.now());
                    this.deltasTimestamp.shift();
                    if (lastDelta > 0) {
                        this.lastUpDeltas.push(lastDelta);
                        this.lastUpDeltas.shift();
                        return this.isInertia(1);
                    } else {
                        this.lastDownDeltas.push(lastDelta);
                        this.lastDownDeltas.shift();
                        return this.isInertia(-1);
                    }
                    return false;
                };

                Lethargy.prototype.isInertia = function(direction) {
                    var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
                    lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
                    if (lastDeltas[0] === null) {
                        return direction;
                    }
                    if (this.deltasTimestamp[(this.stability * 2) - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[(this.stability * 2) - 1]) {
                        return false;
                    }
                    lastDeltasOld = lastDeltas.slice(0, this.stability);
                    lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
                    oldSum = lastDeltasOld.reduce(function(t, s) {
                        return t + s;
                    });
                    newSum = lastDeltasNew.reduce(function(t, s) {
                        return t + s;
                    });
                    oldAverage = oldSum / lastDeltasOld.length;
                    newAverage = newSum / lastDeltasNew.length;
                    if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && (this.sensitivity < Math.abs(newAverage))) {
                        return direction;
                    } else {
                        return false;
                    }
                };

                Lethargy.prototype.showLastUpDeltas = function() {
                    return this.lastUpDeltas;
                };

                Lethargy.prototype.showLastDownDeltas = function() {
                    return this.lastDownDeltas;
                };

                return Lethargy;

            })();

        }).call(this);

    }, {}],
    8: [function(require, module, exports) {
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */

        'use strict';
        /* eslint-disable no-unused-vars */
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;

        function toObject(val) {
            if (val === null || val === undefined) {
                throw new TypeError('Object.assign cannot be called with null or undefined');
            }

            return Object(val);
        }

        function shouldUseNative() {
            try {
                if (!Object.assign) {
                    return false;
                }

                // Detect buggy property enumeration order in older V8 versions.

                // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
                test1[5] = 'de';
                if (Object.getOwnPropertyNames(test1)[0] === '5') {
                    return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test2 = {};
                for (var i = 0; i < 10; i++) {
                    test2['_' + String.fromCharCode(i)] = i;
                }
                var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                    return test2[n];
                });
                if (order2.join('') !== '0123456789') {
                    return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test3 = {};
                'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
                    test3[letter] = letter;
                });
                if (Object.keys(Object.assign({}, test3)).join('') !==
                    'abcdefghijklmnopqrst') {
                    return false;
                }

                return true;
            } catch (err) {
                // We don't expect any of the above to throw, but better to be safe.
                return false;
            }
        }

        module.exports = shouldUseNative() ? Object.assign : function(target, source) {
            var from;
            var to = toObject(target);
            var symbols;

            for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);

                for (var key in from) {
                    if (hasOwnProperty.call(from, key)) {
                        to[key] = from[key];
                    }
                }

                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) {
                        if (propIsEnumerable.call(from, symbols[i])) {
                            to[symbols[i]] = from[symbols[i]];
                        }
                    }
                }
            }

            return to;
        };

    }, {}],
    9: [function(require, module, exports) {
        // check document first so it doesn't error in node.js
        var style = typeof document != 'undefined' ?
            document.createElement('p').style :
            {}

        var prefixes = ['O', 'ms', 'Moz', 'Webkit']
        var upper = /([A-Z])/g
        var memo = {}

        /**
         * prefix `key`
         *
         *   prefix('transform') // => WebkitTransform
         *
         * @param {String} key
         * @return {String}
         * @api public
         */
        function prefix(key) {
            // Camel case
            key = key.replace(/-([a-z])/g, function(_, char) {
                return char.toUpperCase()
            })

            // Without prefix
            if (style[key] !== undefined) return key

            // With prefix
            var Key = key.charAt(0).toUpperCase() + key.slice(1)
            var i = prefixes.length
            while (i--) {
                var name = prefixes[i] + Key
                if (style[name] !== undefined) return name
            }

            return key
        }

        /**
         * Memoized version of `prefix`
         *
         * @param {String} key
         * @return {String}
         * @api public
         */
        function prefixMemozied(key) {
            return key in memo ?
                memo[key] :
                memo[key] = prefix(key)
        }

        /**
         * Create a dashed prefix
         *
         * @param {String} key
         * @return {String}
         * @api public
         */
        function prefixDashed(key) {
            key = prefix(key)
            if (upper.test(key)) {
                key = '-' + key.replace(upper, '-$1')
                upper.lastIndex = 0
            }
            return key.toLowerCase()
        }

        module.exports = prefixMemozied
        module.exports.dash = prefixDashed

    }, {}],
    10: [function(require, module, exports) {

        // for compression
        var win = window;
        var doc = document || {};
        var root = doc.documentElement || {};

        // detect if we need to use firefox KeyEvents vs KeyboardEvents
        var use_key_event = true;
        try {
            doc.createEvent('KeyEvents');
        } catch (err) {
            use_key_event = false;
        }

        // Workaround for https://bugs.webkit.org/show_bug.cgi?id=16735
        function check_kb(ev, opts) {
            if (ev.ctrlKey != (opts.ctrlKey || false) ||
                ev.altKey != (opts.altKey || false) ||
                ev.shiftKey != (opts.shiftKey || false) ||
                ev.metaKey != (opts.metaKey || false) ||
                ev.keyCode != (opts.keyCode || 0) ||
                ev.charCode != (opts.charCode || 0)) {

                ev = document.createEvent('Event');
                ev.initEvent(opts.type, opts.bubbles, opts.cancelable);
                ev.ctrlKey = opts.ctrlKey || false;
                ev.altKey = opts.altKey || false;
                ev.shiftKey = opts.shiftKey || false;
                ev.metaKey = opts.metaKey || false;
                ev.keyCode = opts.keyCode || 0;
                ev.charCode = opts.charCode || 0;
            }

            return ev;
        }

        // modern browsers, do a proper dispatchEvent()
        var modern = function(type, opts) {
            opts = opts || {};

            // which init fn do we use
            var family = typeOf(type);
            var init_fam = family;
            if (family === 'KeyboardEvent' && use_key_event) {
                family = 'KeyEvents';
                init_fam = 'KeyEvent';
            }

            var ev = doc.createEvent(family);
            var init_fn = 'init' + init_fam;
            var init = typeof ev[init_fn] === 'function' ? init_fn : 'initEvent';

            var sig = initSignatures[init];
            var args = [];
            var used = {};

            opts.type = type;
            for (var i = 0; i < sig.length; ++i) {
                var key = sig[i];
                var val = opts[key];
                // if no user specified value, then use event default
                if (val === undefined) {
                    val = ev[key];
                }
                used[key] = true;
                args.push(val);
            }
            ev[init].apply(ev, args);

            // webkit key event issue workaround
            if (family === 'KeyboardEvent') {
                ev = check_kb(ev, opts);
            }

            // attach remaining unused options to the object
            for (var key in opts) {
                if (!used[key]) {
                    ev[key] = opts[key];
                }
            }

            return ev;
        };

        var legacy = function(type, opts) {
            opts = opts || {};
            var ev = doc.createEventObject();

            ev.type = type;
            for (var key in opts) {
                if (opts[key] !== undefined) {
                    ev[key] = opts[key];
                }
            }

            return ev;
        };

        // expose either the modern version of event generation or legacy
        // depending on what we support
        // avoids if statements in the code later
        module.exports = doc.createEvent ? modern : legacy;

        var initSignatures = require('./init.json');
        var types = require('./types.json');
        var typeOf = (function() {
            var typs = {};
            for (var key in types) {
                var ts = types[key];
                for (var i = 0; i < ts.length; i++) {
                    typs[ts[i]] = key;
                }
            }

            return function(name) {
                return typs[name] || 'Event';
            };
        })();

    }, {
        "./init.json": 11,
        "./types.json": 12
    }],
    11: [function(require, module, exports) {
        module.exports = {
            "initEvent": [
                "type",
                "bubbles",
                "cancelable"
            ],
            "initUIEvent": [
                "type",
                "bubbles",
                "cancelable",
                "view",
                "detail"
            ],
            "initMouseEvent": [
                "type",
                "bubbles",
                "cancelable",
                "view",
                "detail",
                "screenX",
                "screenY",
                "clientX",
                "clientY",
                "ctrlKey",
                "altKey",
                "shiftKey",
                "metaKey",
                "button",
                "relatedTarget"
            ],
            "initMutationEvent": [
                "type",
                "bubbles",
                "cancelable",
                "relatedNode",
                "prevValue",
                "newValue",
                "attrName",
                "attrChange"
            ],
            "initKeyboardEvent": [
                "type",
                "bubbles",
                "cancelable",
                "view",
                "ctrlKey",
                "altKey",
                "shiftKey",
                "metaKey",
                "keyCode",
                "charCode"
            ],
            "initKeyEvent": [
                "type",
                "bubbles",
                "cancelable",
                "view",
                "ctrlKey",
                "altKey",
                "shiftKey",
                "metaKey",
                "keyCode",
                "charCode"
            ]
        }

    }, {}],
    12: [function(require, module, exports) {
        module.exports = {
            "MouseEvent": [
                "click",
                "mousedown",
                "mouseup",
                "mouseover",
                "mousemove",
                "mouseout"
            ],
            "KeyboardEvent": [
                "keydown",
                "keyup",
                "keypress"
            ],
            "MutationEvent": [
                "DOMSubtreeModified",
                "DOMNodeInserted",
                "DOMNodeRemoved",
                "DOMNodeRemovedFromDocument",
                "DOMNodeInsertedIntoDocument",
                "DOMAttrModified",
                "DOMCharacterDataModified"
            ],
            "HTMLEvents": [
                "load",
                "unload",
                "abort",
                "error",
                "select",
                "change",
                "submit",
                "reset",
                "focus",
                "blur",
                "resize",
                "scroll"
            ],
            "UIEvent": [
                "DOMFocusIn",
                "DOMFocusOut",
                "DOMActivate"
            ]
        }

    }, {}],
    13: [function(require, module, exports) {
        function E() {
            // Keep this empty so it's easier to inherit from
            // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
        }

        E.prototype = {
            on: function(name, callback, ctx) {
                var e = this.e || (this.e = {});

                (e[name] || (e[name] = [])).push({
                    fn: callback,
                    ctx: ctx
                });

                return this;
            },

            once: function(name, callback, ctx) {
                var self = this;

                function listener() {
                    self.off(name, listener);
                    callback.apply(ctx, arguments);
                };

                listener._ = callback
                return this.on(name, listener, ctx);
            },

            emit: function(name) {
                var data = [].slice.call(arguments, 1);
                var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                var i = 0;
                var len = evtArr.length;

                for (i; i < len; i++) {
                    evtArr[i].fn.apply(evtArr[i].ctx, data);
                }

                return this;
            },

            off: function(name, callback) {
                var e = this.e || (this.e = {});
                var evts = e[name];
                var liveEvents = [];

                if (evts && callback) {
                    for (var i = 0, len = evts.length; i < len; i++) {
                        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
                            liveEvents.push(evts[i]);
                    }
                }

                // Remove event from queue to prevent memory leak
                // Suggested by https://github.com/lazd
                // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

                (liveEvents.length) ?
                e[name] = liveEvents: delete e[name];

                return this;
            }
        };

        module.exports = E;

    }, {}],
    14: [function(require, module, exports) {
        'use strict';

        module.exports = function(source) {
            return JSON.parse(JSON.stringify(source));
        };
    }, {}],
    15: [function(require, module, exports) {
        'use strict';

        var objectAssign = require('object-assign');
        var Emitter = require('tiny-emitter');
        var Lethargy = require('lethargy').Lethargy;
        var support = require('./support');
        var clone = require('./clone');
        var bindAll = require('bindall-standalone');
        var EVT_ID = 'virtualscroll';

        module.exports = VirtualScroll;

        var keyCodes = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SPACE: 32
        };

        function VirtualScroll(options) {
            bindAll(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');

            this.el = window;
            if (options && options.el) {
                this.el = options.el;
                delete options.el;
            }
            this.options = objectAssign({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: false,
                unpreventTouchClass: 'vs-touchmove-allowed',
                limitInertia: false
            }, options);

            if (this.options.limitInertia) this._lethargy = new Lethargy();

            this._emitter = new Emitter();
            this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            };
            this.touchStartX = null;
            this.touchStartY = null;
            this.bodyTouchAction = null;

            if (this.options.passive !== undefined) {
                this.listenerOptions = {
                    passive: this.options.passive
                };
            }
        }

        VirtualScroll.prototype._notify = function(e) {
            var evt = this._event;
            evt.x += evt.deltaX;
            evt.y += evt.deltaY;

            this._emitter.emit(EVT_ID, {
                x: evt.x,
                y: evt.y,
                deltaX: evt.deltaX,
                deltaY: evt.deltaY,
                originalEvent: e
            });
        };

        VirtualScroll.prototype._onWheel = function(e) {
            var options = this.options;
            if (this._lethargy && this._lethargy.check(e) === false) return;
            var evt = this._event;

            // In Chrome and in Firefox (at least the new one)
            evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
            evt.deltaY = e.wheelDeltaY || e.deltaY * -1;

            // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
            // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
            if (support.isFirefox && e.deltaMode == 1) {
                evt.deltaX *= options.firefoxMultiplier;
                evt.deltaY *= options.firefoxMultiplier;
            }

            evt.deltaX *= options.mouseMultiplier;
            evt.deltaY *= options.mouseMultiplier;

            this._notify(e);
        };

        VirtualScroll.prototype._onMouseWheel = function(e) {
            if (this.options.limitInertia && this._lethargy.check(e) === false) return;

            var evt = this._event;

            // In Safari, IE and in Chrome if 'wheel' isn't defined
            evt.deltaX = (e.wheelDeltaX) ? e.wheelDeltaX : 0;
            evt.deltaY = (e.wheelDeltaY) ? e.wheelDeltaY : e.wheelDelta;

            this._notify(e);
        };

        VirtualScroll.prototype._onTouchStart = function(e) {
            var t = (e.targetTouches) ? e.targetTouches[0] : e;
            this.touchStartX = t.pageX;
            this.touchStartY = t.pageY;
        };

        VirtualScroll.prototype._onTouchMove = function(e) {
            var options = this.options;
            if (options.preventTouch &&
                !e.target.classList.contains(options.unpreventTouchClass)) {
                e.preventDefault();
            }

            var evt = this._event;

            var t = (e.targetTouches) ? e.targetTouches[0] : e;

            evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
            evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;

            this.touchStartX = t.pageX;
            this.touchStartY = t.pageY;

            this._notify(e);
        };

        VirtualScroll.prototype._onKeyDown = function(e) {
            var evt = this._event;
            evt.deltaX = evt.deltaY = 0;
            var windowHeight = window.innerHeight - 40

            switch (e.keyCode) {
                case keyCodes.LEFT:
                case keyCodes.UP:
                    evt.deltaY = this.options.keyStep;
                    break;

                case keyCodes.RIGHT:
                case keyCodes.DOWN:
                    evt.deltaY = -this.options.keyStep;
                    break;
                case keyCodes.SPACE && e.shiftKey:
                    evt.deltaY = windowHeight;
                    break;
                case keyCodes.SPACE:
                    evt.deltaY = -windowHeight;
                    break;
                default:
                    return;
            }

            this._notify(e);
        };

        VirtualScroll.prototype._bind = function() {
            if (support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
            if (support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

            if (support.hasTouch) {
                this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
                this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
            }

            if (support.hasPointer && support.hasTouchWin) {
                this.bodyTouchAction = document.body.style.msTouchAction;
                document.body.style.msTouchAction = 'none';
                this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
                this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
            }

            if (support.hasKeyDown) document.addEventListener('keydown', this._onKeyDown);
        };

        VirtualScroll.prototype._unbind = function() {
            if (support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
            if (support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

            if (support.hasTouch) {
                this.el.removeEventListener('touchstart', this._onTouchStart);
                this.el.removeEventListener('touchmove', this._onTouchMove);
            }

            if (support.hasPointer && support.hasTouchWin) {
                document.body.style.msTouchAction = this.bodyTouchAction;
                this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
                this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
            }

            if (support.hasKeyDown) document.removeEventListener('keydown', this._onKeyDown);
        };

        VirtualScroll.prototype.on = function(cb, ctx) {
            this._emitter.on(EVT_ID, cb, ctx);

            var events = this._emitter.e;
            if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
        };

        VirtualScroll.prototype.off = function(cb, ctx) {
            this._emitter.off(EVT_ID, cb, ctx);

            var events = this._emitter.e;
            if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
        };

        VirtualScroll.prototype.reset = function() {
            var evt = this._event;
            evt.x = 0;
            evt.y = 0;
        };

        VirtualScroll.prototype.destroy = function() {
            this._emitter.off();
            this._unbind();
        };

    }, {
        "./clone": 14,
        "./support": 16,
        "bindall-standalone": 2,
        "lethargy": 7,
        "object-assign": 8,
        "tiny-emitter": 13
    }],
    16: [function(require, module, exports) {
        'use strict';

        module.exports = (function getSupport() {
            return {
                hasWheelEvent: 'onwheel' in document,
                hasMouseWheelEvent: 'onmousewheel' in document,
                hasTouch: 'ontouchstart' in document,
                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: 'onkeydown' in document,
                isFirefox: navigator.userAgent.indexOf('Firefox') > -1
            };
        })();

    }, {}]
}, {}, [1]);




// PARALLAX EXTENSION



class Parallax extends Smooth {

    constructor(opt) {
        super(opt)
        this.createExtraBound()
        this.resizing = false
        this.cache = null
        this.dom.divs = Array.prototype.slice.call(opt.divs, 0)
    }

    createExtraBound() {
        ['getCache', 'inViewport']
        .forEach((fn) => this[fn] = this[fn].bind(this))
    }

    resize() {
        this.resizing = true
        this.getCache()
        super.resize()
        this.resizing = false
    }

    getCache() {
        this.cache = []
        this.dom.divs.forEach((el, index) => {
            el.style.display = 'block'
            el.style.transform = 'none'
            const scrollY = this.vars.target
            const bounding = el.getBoundingClientRect()
            const bounds = {
                el: el,
                state: true,
                top: bounding.top + scrollY,
                left: bounding.left,
                center: bounding.height / 2,
                bottom: bounding.bottom + scrollY,
                speed: el.getAttribute('data-speed') || '0'
            }
            if (index === 4) {

            }
            // this.vars.bounding = bounding.bottom > this.vars.bounding ? bounding.bottom - window.innerHeight : this.vars.bounding;
            this.cache.push(bounds)
        })
        // get bounding value based on the container (.vs-section) height
        this.vars.bounding = this.dom.section.getBoundingClientRect().height - (this.vars.native ? 0 : this.vars.height)
    }

    run() {
        this.dom.divs.forEach(this.inViewport)
        this.dom.section.style[this.prefix] = this.getTransform(this.vars.current * -1)
        super.run()
    }

    inViewport(el, index) {
        if (!this.cache || this.resizing) return
        const cache = this.cache[index]
        const current = this.vars.current
        const transform = (cache.top - current) * cache.speed
        const top = Math.round((cache.top + transform) - current)
        const bottom = Math.round((cache.bottom + transform) - current)
        const inview = bottom > 0 && top < this.vars.height
        if (inview) {
            el.style.display = 'block'
            el.style[this.prefix] = this.getTransform(transform)
        } else {

        }
    }
}


class Horizontal extends Smooth {

    constructor(opt) {
        super(opt)
        this.createExtraBound()
        this.resizing = false
        this.cache = null
        this.dom.divs = Array.prototype.slice.call(opt.divs, 0)
    }

    createExtraBound() {
        ['getCache', 'inViewport']
        .forEach((fn) => this[fn] = this[fn].bind(this))
    }

    resize() {
        this.resizing = true
        this.getCache()
        super.resize()

        this.resizing = false
    }

    getCache() {
        this.cache = []
        const unit = (this.vars.width / 2.6)
        this.dom.divs.forEach((el, index) => {
            el.style.display = 'inline-block'
            el.style.transform = 'none'

            const scrollX = this.vars.target
            const bounding = el.getBoundingClientRect()
            const bounds = {
                el: el,
                state: true,
                left: bounding.left + scrollX,
                right: bounding.right + scrollX,
                center: unit / 2,
                speed: el.getAttribute('data-speed') || '0'
            }
            this.cache.push(bounds)
        })
        this.dom.section.style.width = this.vars.width + 'px';
        this.vars.bounding = unit * this.dom.divs.length - this.vars.width;
    }

    run() {
        this.dom.divs.forEach(this.inViewport)
        this.dom.section.style[this.prefix] = `translate3d(${this.vars.current * -1}px,0,0)`
        super.run()
    }

    inViewport(el, index) {
        if (!this.cache || this.resizing) return;

        var cache = this.cache[index];
        var current = this.vars.current;
        var transform = (cache.left - current) * cache.speed;
        var left = Math.round(cache.left + transform - current);
        var right = Math.round(cache.right + transform - current);
        var inview = right > 0 && left < this.vars.width;

        el.style[this.prefix] = this.getTransform(transform);

    }
}