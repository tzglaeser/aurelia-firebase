/* */ 
(function(Buffer, process) {
  var h,
      aa = this;
  function n(a) {
    return void 0 !== a;
  }
  function ba() {}
  function ca(a) {
    a.Vb = function() {
      return a.nf ? a.nf : a.nf = new a;
    };
  }
  function da(a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array)
          return "array";
        if (a instanceof Object)
          return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c)
          return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
          return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
          return "function";
      } else
        return "null";
    else if ("function" == b && "undefined" == typeof a.call)
      return "object";
    return b;
  }
  function ea(a) {
    return "array" == da(a);
  }
  function fa(a) {
    var b = da(a);
    return "array" == b || "object" == b && "number" == typeof a.length;
  }
  function p(a) {
    return "string" == typeof a;
  }
  function ga(a) {
    return "number" == typeof a;
  }
  function ha(a) {
    return "function" == da(a);
  }
  function ia(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b;
  }
  function ja(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ka(a, b, c) {
    if (!a)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }
    return function() {
      return a.apply(b, arguments);
    };
  }
  function q(a, b, c) {
    q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
    return q.apply(null, arguments);
  }
  var la = Date.now || function() {
    return +new Date;
  };
  function ma(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Zg = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Tg = function(a, c, f) {
      for (var g = Array(arguments.length - 2),
          k = 2; k < arguments.length; k++)
        g[k - 2] = arguments[k];
      return b.prototype[c].apply(a, g);
    };
  }
  ;
  function r(a, b) {
    for (var c in a)
      b.call(void 0, a[c], c, a);
  }
  function na(a, b) {
    var c = {},
        d;
    for (d in a)
      c[d] = b.call(void 0, a[d], d, a);
    return c;
  }
  function oa(a, b) {
    for (var c in a)
      if (!b.call(void 0, a[c], c, a))
        return !1;
    return !0;
  }
  function pa(a) {
    var b = 0,
        c;
    for (c in a)
      b++;
    return b;
  }
  function qa(a) {
    for (var b in a)
      return b;
  }
  function ra(a) {
    var b = [],
        c = 0,
        d;
    for (d in a)
      b[c++] = a[d];
    return b;
  }
  function sa(a) {
    var b = [],
        c = 0,
        d;
    for (d in a)
      b[c++] = d;
    return b;
  }
  function ta(a, b) {
    for (var c in a)
      if (a[c] == b)
        return !0;
    return !1;
  }
  function ua(a, b, c) {
    for (var d in a)
      if (b.call(c, a[d], d, a))
        return d;
  }
  function va(a, b) {
    var c = ua(a, b, void 0);
    return c && a[c];
  }
  function wa(a) {
    for (var b in a)
      return !1;
    return !0;
  }
  function xa(a) {
    var b = {},
        c;
    for (c in a)
      b[c] = a[c];
    return b;
  }
  var ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function za(a, b) {
    for (var c,
        d,
        e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d)
        a[c] = d[c];
      for (var f = 0; f < ya.length; f++)
        c = ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  ;
  function Aa(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
      try {
        return eval("(" + a + ")");
      } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  }
  function Ba() {
    this.Pd = void 0;
  }
  function Ca(a, b, c) {
    switch (typeof b) {
      case "string":
        Da(b, c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? b : "null");
        break;
      case "boolean":
        c.push(b);
        break;
      case "undefined":
        c.push("null");
        break;
      case "object":
        if (null == b) {
          c.push("null");
          break;
        }
        if (ea(b)) {
          var d = b.length;
          c.push("[");
          for (var e = "",
              f = 0; f < d; f++)
            c.push(e), e = b[f], Ca(a, a.Pd ? a.Pd.call(b, String(f), e) : e, c), e = ",";
          c.push("]");
          break;
        }
        c.push("{");
        d = "";
        for (f in b)
          Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Da(f, c), c.push(":"), Ca(a, a.Pd ? a.Pd.call(b, f, e) : e, c), d = ","));
        c.push("}");
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof b);
    }
  }
  var Ea = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
  },
      Fa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  function Da(a, b) {
    b.push('"', a.replace(Fa, function(a) {
      if (a in Ea)
        return Ea[a];
      var b = a.charCodeAt(0),
          e = "\\u";
      16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
      return Ea[a] = e + b.toString(16);
    }), '"');
  }
  ;
  function Ga() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ la()).toString(36);
  }
  ;
  var Ha;
  a: {
    var Ia = aa.navigator;
    if (Ia) {
      var Ja = Ia.userAgent;
      if (Ja) {
        Ha = Ja;
        break a;
      }
    }
    Ha = "";
  }
  ;
  function Ka() {
    this.Va = -1;
  }
  ;
  function La() {
    this.Va = -1;
    this.Va = 64;
    this.R = [];
    this.ie = [];
    this.Pf = [];
    this.Id = [];
    this.Id[0] = 128;
    for (var a = 1; a < this.Va; ++a)
      this.Id[a] = 0;
    this.$d = this.$b = 0;
    this.reset();
  }
  ma(La, Ka);
  La.prototype.reset = function() {
    this.R[0] = 1732584193;
    this.R[1] = 4023233417;
    this.R[2] = 2562383102;
    this.R[3] = 271733878;
    this.R[4] = 3285377520;
    this.$d = this.$b = 0;
  };
  function Ma(a, b, c) {
    c || (c = 0);
    var d = a.Pf;
    if (p(b))
      for (var e = 0; 16 > e; e++)
        d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
    else
      for (e = 0; 16 > e; e++)
        d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
    for (e = 16; 80 > e; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = (f << 1 | f >>> 31) & 4294967295;
    }
    b = a.R[0];
    c = a.R[1];
    for (var g = a.R[2],
        k = a.R[3],
        l = a.R[4],
        m,
        e = 0; 80 > e; e++)
      40 > e ? 20 > e ? (f = k ^ c & (g ^ k), m = 1518500249) : (f = c ^ g ^ k, m = 1859775393) : 60 > e ? (f = c & g | k & (c | g), m = 2400959708) : (f = c ^ g ^ k, m = 3395469782), f = (b << 5 | b >>> 27) + f + l + m + d[e] & 4294967295, l = k, k = g, g = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
    a.R[0] = a.R[0] + b & 4294967295;
    a.R[1] = a.R[1] + c & 4294967295;
    a.R[2] = a.R[2] + g & 4294967295;
    a.R[3] = a.R[3] + k & 4294967295;
    a.R[4] = a.R[4] + l & 4294967295;
  }
  La.prototype.update = function(a, b) {
    if (null != a) {
      n(b) || (b = a.length);
      for (var c = b - this.Va,
          d = 0,
          e = this.ie,
          f = this.$b; d < b; ) {
        if (0 == f)
          for (; d <= c; )
            Ma(this, a, d), d += this.Va;
        if (p(a))
          for (; d < b; ) {
            if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.Va) {
              Ma(this, e);
              f = 0;
              break;
            }
          }
        else
          for (; d < b; )
            if (e[f] = a[d], ++f, ++d, f == this.Va) {
              Ma(this, e);
              f = 0;
              break;
            }
      }
      this.$b = f;
      this.$d += b;
    }
  };
  var u = Array.prototype,
      Na = u.indexOf ? function(a, b, c) {
        return u.indexOf.call(a, b, c);
      } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (p(a))
          return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
          if (c in a && a[c] === b)
            return c;
        return -1;
      },
      Oa = u.forEach ? function(a, b, c) {
        u.forEach.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length,
            e = p(a) ? a.split("") : a,
            f = 0; f < d; f++)
          f in e && b.call(c, e[f], f, a);
      },
      Pa = u.filter ? function(a, b, c) {
        return u.filter.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length,
            e = [],
            f = 0,
            g = p(a) ? a.split("") : a,
            k = 0; k < d; k++)
          if (k in g) {
            var l = g[k];
            b.call(c, l, k, a) && (e[f++] = l);
          }
        return e;
      },
      Qa = u.map ? function(a, b, c) {
        return u.map.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length,
            e = Array(d),
            f = p(a) ? a.split("") : a,
            g = 0; g < d; g++)
          g in f && (e[g] = b.call(c, f[g], g, a));
        return e;
      },
      Ra = u.reduce ? function(a, b, c, d) {
        for (var e = [],
            f = 1,
            g = arguments.length; f < g; f++)
          e.push(arguments[f]);
        d && (e[0] = q(b, d));
        return u.reduce.apply(a, e);
      } : function(a, b, c, d) {
        var e = c;
        Oa(a, function(c, g) {
          e = b.call(d, e, c, g, a);
        });
        return e;
      },
      Sa = u.every ? function(a, b, c) {
        return u.every.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length,
            e = p(a) ? a.split("") : a,
            f = 0; f < d; f++)
          if (f in e && !b.call(c, e[f], f, a))
            return !1;
        return !0;
      };
  function Ta(a, b) {
    var c = Ua(a, b, void 0);
    return 0 > c ? null : p(a) ? a.charAt(c) : a[c];
  }
  function Ua(a, b, c) {
    for (var d = a.length,
        e = p(a) ? a.split("") : a,
        f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a))
        return f;
    return -1;
  }
  function Va(a, b) {
    var c = Na(a, b);
    0 <= c && u.splice.call(a, c, 1);
  }
  function Wa(a, b) {
    a.sort(b || Xa);
  }
  function Xa(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  ;
  var Ya = -1 != Ha.indexOf("Opera") || -1 != Ha.indexOf("OPR"),
      Za = -1 != Ha.indexOf("Trident") || -1 != Ha.indexOf("MSIE"),
      $a = -1 != Ha.indexOf("Gecko") && -1 == Ha.toLowerCase().indexOf("webkit") && !(-1 != Ha.indexOf("Trident") || -1 != Ha.indexOf("MSIE")),
      ab = -1 != Ha.toLowerCase().indexOf("webkit");
  (function() {
    var a = "",
        b;
    if (Ya && aa.opera)
      return a = aa.opera.version, ha(a) ? a() : a;
    $a ? b = /rv\:([^\);]+)(\)|;)/ : Za ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : ab && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(Ha)) ? a[1] : "");
    return Za && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a;
  })();
  var bb = null,
      cb = null;
  function db(a, b) {
    if (!fa(a))
      throw Error("encodeByteArray takes an array as a parameter");
    if (!bb) {
      bb = {};
      cb = {};
      for (var c = 0; 65 > c; c++)
        bb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), cb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);
    }
    for (var c = b ? cb : bb,
        d = [],
        e = 0; e < a.length; e += 3) {
      var f = a[e],
          g = e + 1 < a.length,
          k = g ? a[e + 1] : 0,
          l = e + 2 < a.length,
          m = l ? a[e + 2] : 0,
          t = f >> 2,
          f = (f & 3) << 4 | k >> 4,
          k = (k & 15) << 2 | m >> 6,
          m = m & 63;
      l || (m = 64, g || (k = 64));
      d.push(c[t], c[f], c[k], c[m]);
    }
    return d.join("");
  }
  ;
  function v(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function w(a, b) {
    if (Object.prototype.hasOwnProperty.call(a, b))
      return a[b];
  }
  function eb(a, b) {
    for (var c in a)
      Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function fb(a) {
    var b = {};
    eb(a, function(a, d) {
      b[a] = d;
    });
    return b;
  }
  ;
  function gb(a) {
    var b = [];
    eb(a, function(a, d) {
      ea(d) ? Oa(d, function(d) {
        b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d));
      }) : b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d));
    });
    return b.length ? "&" + b.join("&") : "";
  }
  function hb(a) {
    var b = {};
    a = a.replace(/^\?/, "").split("&");
    Oa(a, function(a) {
      a && (a = a.split("="), b[a[0]] = a[1]);
    });
    return b;
  }
  ;
  function y(a, b, c, d) {
    var e;
    d < b ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c);
    if (e)
      throw Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + ".");
  }
  function z(a, b, c) {
    var d = "";
    switch (b) {
      case 1:
        d = c ? "first" : "First";
        break;
      case 2:
        d = c ? "second" : "Second";
        break;
      case 3:
        d = c ? "third" : "Third";
        break;
      case 4:
        d = c ? "fourth" : "Fourth";
        break;
      default:
        throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
    }
    return a = a + " failed: " + (d + " argument ");
  }
  function A(a, b, c, d) {
    if ((!d || n(c)) && !ha(c))
      throw Error(z(a, b, d) + "must be a valid function.");
  }
  function ib(a, b, c) {
    if (n(c) && (!ia(c) || null === c))
      throw Error(z(a, b, !0) + "must be a valid context object.");
  }
  ;
  function jb(a) {
    return "undefined" !== typeof JSON && n(JSON.parse) ? JSON.parse(a) : Aa(a);
  }
  function B(a) {
    if ("undefined" !== typeof JSON && n(JSON.stringify))
      a = JSON.stringify(a);
    else {
      var b = [];
      Ca(new Ba, a, b);
      a = b.join("");
    }
    return a;
  }
  ;
  function kb() {
    this.Rd = C;
  }
  kb.prototype.j = function(a) {
    return this.Rd.oa(a);
  };
  kb.prototype.toString = function() {
    return this.Rd.toString();
  };
  function lb() {}
  lb.prototype.jf = function() {
    return null;
  };
  lb.prototype.ue = function() {
    return null;
  };
  var mb = new lb;
  function nb(a, b, c) {
    this.Mf = a;
    this.Ja = b;
    this.Hd = c;
  }
  nb.prototype.jf = function(a) {
    var b = this.Ja.D;
    if (ob(b, a))
      return b.j().M(a);
    b = null != this.Hd ? new pb(this.Hd, !0, !1) : this.Ja.u();
    return this.Mf.Wa(a, b);
  };
  nb.prototype.ue = function(a, b, c) {
    var d = null != this.Hd ? this.Hd : qb(this.Ja);
    a = this.Mf.je(d, b, 1, c, a);
    return 0 === a.length ? null : a[0];
  };
  function rb() {
    this.qb = [];
  }
  function sb(a, b) {
    for (var c = null,
        d = 0; d < b.length; d++) {
      var e = b[d],
          f = e.Yb();
      null === c || f.Z(c.Yb()) || (a.qb.push(c), c = null);
      null === c && (c = new tb(f));
      c.add(e);
    }
    c && a.qb.push(c);
  }
  function ub(a, b, c) {
    sb(a, c);
    vb(a, function(a) {
      return a.Z(b);
    });
  }
  function wb(a, b, c) {
    sb(a, c);
    vb(a, function(a) {
      return a.contains(b) || b.contains(a);
    });
  }
  function vb(a, b) {
    for (var c = !0,
        d = 0; d < a.qb.length; d++) {
      var e = a.qb[d];
      if (e)
        if (e = e.Yb(), b(e)) {
          for (var e = a.qb[d],
              f = 0; f < e.rd.length; f++) {
            var g = e.rd[f];
            if (null !== g) {
              e.rd[f] = null;
              var k = g.Tb();
              xb && yb("event: " + g.toString());
              zb(k);
            }
          }
          a.qb[d] = null;
        } else
          c = !1;
    }
    c && (a.qb = []);
  }
  function tb(a) {
    this.qa = a;
    this.rd = [];
  }
  tb.prototype.add = function(a) {
    this.rd.push(a);
  };
  tb.prototype.Yb = function() {
    return this.qa;
  };
  function D(a, b, c, d) {
    this.type = a;
    this.Ia = b;
    this.Xa = c;
    this.Ge = d;
    this.Nd = void 0;
  }
  function Ab(a) {
    return new D(Bb, a);
  }
  var Bb = "value";
  function Cb(a, b, c, d) {
    this.qe = b;
    this.Ud = c;
    this.Nd = d;
    this.qd = a;
  }
  Cb.prototype.Yb = function() {
    var a = this.Ud.kc();
    return "value" === this.qd ? a.path : a.parent().path;
  };
  Cb.prototype.ve = function() {
    return this.qd;
  };
  Cb.prototype.Tb = function() {
    return this.qe.Tb(this);
  };
  Cb.prototype.toString = function() {
    return this.Yb().toString() + ":" + this.qd + ":" + B(this.Ud.ff());
  };
  function Db(a, b, c) {
    this.qe = a;
    this.error = b;
    this.path = c;
  }
  Db.prototype.Yb = function() {
    return this.path;
  };
  Db.prototype.ve = function() {
    return "cancel";
  };
  Db.prototype.Tb = function() {
    return this.qe.Tb(this);
  };
  Db.prototype.toString = function() {
    return this.path.toString() + ":cancel";
  };
  function pb(a, b, c) {
    this.B = a;
    this.$ = b;
    this.Sb = c;
  }
  function Eb(a) {
    return a.$;
  }
  function ob(a, b) {
    return a.$ && !a.Sb || a.B.Ga(b);
  }
  pb.prototype.j = function() {
    return this.B;
  };
  function Fb(a) {
    this.$f = a;
    this.zd = null;
  }
  Fb.prototype.get = function() {
    var a = this.$f.get(),
        b = xa(a);
    if (this.zd)
      for (var c in this.zd)
        b[c] -= this.zd[c];
    this.zd = a;
    return b;
  };
  function Gb(a, b) {
    this.If = {};
    this.Wd = new Fb(a);
    this.ca = b;
    var c = 1E4 + 2E4 * Math.random();
    setTimeout(q(this.Cf, this), Math.floor(c));
  }
  Gb.prototype.Cf = function() {
    var a = this.Wd.get(),
        b = {},
        c = !1,
        d;
    for (d in a)
      0 < a[d] && v(this.If, d) && (b[d] = a[d], c = !0);
    c && this.ca.Bf(b);
    setTimeout(q(this.Cf, this), Math.floor(6E5 * Math.random()));
  };
  function Hb() {
    this.Bc = {};
  }
  function Ib(a, b, c) {
    n(c) || (c = 1);
    v(a.Bc, b) || (a.Bc[b] = 0);
    a.Bc[b] += c;
  }
  Hb.prototype.get = function() {
    return xa(this.Bc);
  };
  var Jb = {},
      Kb = {};
  function Lb(a) {
    a = a.toString();
    Jb[a] || (Jb[a] = new Hb);
    return Jb[a];
  }
  function Mb(a, b) {
    var c = a.toString();
    Kb[c] || (Kb[c] = b());
    return Kb[c];
  }
  ;
  function E(a, b) {
    this.name = a;
    this.S = b;
  }
  function Nb(a, b) {
    return new E(a, b);
  }
  ;
  function Ob(a, b) {
    return Pb(a.name, b.name);
  }
  function Qb(a, b) {
    return Pb(a, b);
  }
  ;
  function Rb(a, b, c) {
    this.type = Sb;
    this.source = a;
    this.path = b;
    this.Ha = c;
  }
  Rb.prototype.Vc = function(a) {
    return this.path.e() ? new Rb(this.source, F, this.Ha.M(a)) : new Rb(this.source, G(this.path), this.Ha);
  };
  Rb.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " overwrite: " + this.Ha.toString() + ")";
  };
  function Tb(a, b) {
    this.type = Ub;
    this.source = Vb;
    this.path = a;
    this.Qe = b;
  }
  Tb.prototype.Vc = function() {
    return this.path.e() ? this : new Tb(G(this.path), this.Qe);
  };
  Tb.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " ack write revert=" + this.Qe + ")";
  };
  function Wb(a, b) {
    this.type = Xb;
    this.source = a;
    this.path = b;
  }
  Wb.prototype.Vc = function() {
    return this.path.e() ? new Wb(this.source, F) : new Wb(this.source, G(this.path));
  };
  Wb.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " listen_complete)";
  };
  function Yb(a, b) {
    this.Ka = a;
    this.xa = b ? b : Zb;
  }
  h = Yb.prototype;
  h.Ma = function(a, b) {
    return new Yb(this.Ka, this.xa.Ma(a, b, this.Ka).X(null, null, !1, null, null));
  };
  h.remove = function(a) {
    return new Yb(this.Ka, this.xa.remove(a, this.Ka).X(null, null, !1, null, null));
  };
  h.get = function(a) {
    for (var b,
        c = this.xa; !c.e(); ) {
      b = this.Ka(a, c.key);
      if (0 === b)
        return c.value;
      0 > b ? c = c.left : 0 < b && (c = c.right);
    }
    return null;
  };
  function $b(a, b) {
    for (var c,
        d = a.xa,
        e = null; !d.e(); ) {
      c = a.Ka(b, d.key);
      if (0 === c) {
        if (d.left.e())
          return e ? e.key : null;
        for (d = d.left; !d.right.e(); )
          d = d.right;
        return d.key;
      }
      0 > c ? d = d.left : 0 < c && (e = d, d = d.right);
    }
    throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
  }
  h.e = function() {
    return this.xa.e();
  };
  h.count = function() {
    return this.xa.count();
  };
  h.Pc = function() {
    return this.xa.Pc();
  };
  h.ec = function() {
    return this.xa.ec();
  };
  h.ha = function(a) {
    return this.xa.ha(a);
  };
  h.Wb = function(a) {
    return new ac(this.xa, null, this.Ka, !1, a);
  };
  h.Xb = function(a, b) {
    return new ac(this.xa, a, this.Ka, !1, b);
  };
  h.Zb = function(a, b) {
    return new ac(this.xa, a, this.Ka, !0, b);
  };
  h.lf = function(a) {
    return new ac(this.xa, null, this.Ka, !0, a);
  };
  function ac(a, b, c, d, e) {
    this.Qd = e || null;
    this.Ae = d;
    this.Oa = [];
    for (e = 1; !a.e(); )
      if (e = b ? c(a.key, b) : 1, d && (e *= -1), 0 > e)
        a = this.Ae ? a.left : a.right;
      else if (0 === e) {
        this.Oa.push(a);
        break;
      } else
        this.Oa.push(a), a = this.Ae ? a.right : a.left;
  }
  function H(a) {
    if (0 === a.Oa.length)
      return null;
    var b = a.Oa.pop(),
        c;
    c = a.Qd ? a.Qd(b.key, b.value) : {
      key: b.key,
      value: b.value
    };
    if (a.Ae)
      for (b = b.left; !b.e(); )
        a.Oa.push(b), b = b.right;
    else
      for (b = b.right; !b.e(); )
        a.Oa.push(b), b = b.left;
    return c;
  }
  function bc(a) {
    if (0 === a.Oa.length)
      return null;
    var b;
    b = a.Oa;
    b = b[b.length - 1];
    return a.Qd ? a.Qd(b.key, b.value) : {
      key: b.key,
      value: b.value
    };
  }
  function cc(a, b, c, d, e) {
    this.key = a;
    this.value = b;
    this.color = null != c ? c : !0;
    this.left = null != d ? d : Zb;
    this.right = null != e ? e : Zb;
  }
  h = cc.prototype;
  h.X = function(a, b, c, d, e) {
    return new cc(null != a ? a : this.key, null != b ? b : this.value, null != c ? c : this.color, null != d ? d : this.left, null != e ? e : this.right);
  };
  h.count = function() {
    return this.left.count() + 1 + this.right.count();
  };
  h.e = function() {
    return !1;
  };
  h.ha = function(a) {
    return this.left.ha(a) || a(this.key, this.value) || this.right.ha(a);
  };
  function dc(a) {
    return a.left.e() ? a : dc(a.left);
  }
  h.Pc = function() {
    return dc(this).key;
  };
  h.ec = function() {
    return this.right.e() ? this.key : this.right.ec();
  };
  h.Ma = function(a, b, c) {
    var d,
        e;
    e = this;
    d = c(a, e.key);
    e = 0 > d ? e.X(null, null, null, e.left.Ma(a, b, c), null) : 0 === d ? e.X(null, b, null, null, null) : e.X(null, null, null, null, e.right.Ma(a, b, c));
    return ec(e);
  };
  function fc(a) {
    if (a.left.e())
      return Zb;
    a.left.fa() || a.left.left.fa() || (a = gc(a));
    a = a.X(null, null, null, fc(a.left), null);
    return ec(a);
  }
  h.remove = function(a, b) {
    var c,
        d;
    c = this;
    if (0 > b(a, c.key))
      c.left.e() || c.left.fa() || c.left.left.fa() || (c = gc(c)), c = c.X(null, null, null, c.left.remove(a, b), null);
    else {
      c.left.fa() && (c = hc(c));
      c.right.e() || c.right.fa() || c.right.left.fa() || (c = ic(c), c.left.left.fa() && (c = hc(c), c = ic(c)));
      if (0 === b(a, c.key)) {
        if (c.right.e())
          return Zb;
        d = dc(c.right);
        c = c.X(d.key, d.value, null, null, fc(c.right));
      }
      c = c.X(null, null, null, null, c.right.remove(a, b));
    }
    return ec(c);
  };
  h.fa = function() {
    return this.color;
  };
  function ec(a) {
    a.right.fa() && !a.left.fa() && (a = jc(a));
    a.left.fa() && a.left.left.fa() && (a = hc(a));
    a.left.fa() && a.right.fa() && (a = ic(a));
    return a;
  }
  function gc(a) {
    a = ic(a);
    a.right.left.fa() && (a = a.X(null, null, null, null, hc(a.right)), a = jc(a), a = ic(a));
    return a;
  }
  function jc(a) {
    return a.right.X(null, null, a.color, a.X(null, null, !0, null, a.right.left), null);
  }
  function hc(a) {
    return a.left.X(null, null, a.color, null, a.X(null, null, !0, a.left.right, null));
  }
  function ic(a) {
    return a.X(null, null, !a.color, a.left.X(null, null, !a.left.color, null, null), a.right.X(null, null, !a.right.color, null, null));
  }
  function kc() {}
  h = kc.prototype;
  h.X = function() {
    return this;
  };
  h.Ma = function(a, b) {
    return new cc(a, b, null);
  };
  h.remove = function() {
    return this;
  };
  h.count = function() {
    return 0;
  };
  h.e = function() {
    return !0;
  };
  h.ha = function() {
    return !1;
  };
  h.Pc = function() {
    return null;
  };
  h.ec = function() {
    return null;
  };
  h.fa = function() {
    return !1;
  };
  var Zb = new kc;
  (function() {
    var a = process.version;
    if ("v0.10.22" === a || "v0.10.23" === a || "v0.10.24" === a) {
      var b = function(a, b, c) {
        this.chunk = a;
        this.encoding = b;
        this.callback = c;
      },
          c = function(a, c, d, e, m) {
            c.objectMode || !1 === c.decodeStrings || "string" !== typeof d || (d = new Buffer(d, e));
            Buffer.isBuffer(d) && (e = "buffer");
            var t = c.objectMode ? 1 : d.length;
            c.length += t;
            var x = c.length < c.highWaterMark;
            x || (c.needDrain = !0);
            c.writing ? c.buffer.push(new b(d, e, m)) : (c.writelen = t, c.writecb = m, c.writing = !0, c.sync = !0, a._write(d, e, c.onwrite), c.sync = !1);
            return x;
          },
          d = function(a, b, c, d) {
            var e = !0;
            if (!Buffer.isBuffer(c) && "string" !== typeof c && null !== c && void 0 !== c && !b.objectMode) {
              var t = new TypeError("Invalid non-string/buffer chunk");
              a.emit("error", t);
              process.nextTick(function() {
                d(t);
              });
              e = !1;
            }
            return e;
          },
          e = function(a, b) {
            var c = Error("write after end");
            a.emit("error", c);
            process.nextTick(function() {
              b(c);
            });
          },
          a = require("_stream_writable");
      a.prototype.write = function(a, b, k) {
        var l = this._writableState,
            m = !1;
        "function" === typeof b && (k = b, b = null);
        Buffer.isBuffer(a) ? b = "buffer" : b || (b = l.defaultEncoding);
        "function" !== typeof k && (k = function() {});
        l.ended ? e(this, k) : d(this, l, a, k) && (m = c(this, l, a, b, k));
        return m;
      };
      require("_stream_duplex").prototype.write = a.prototype.write;
    }
  })();
  function lc(a, b) {
    return a && "object" === typeof a ? (I(".sv" in a, "Unexpected leaf node or priority contents"), b[a[".sv"]]) : a;
  }
  function mc(a, b) {
    var c = new nc;
    oc(a, new K(""), function(a, e) {
      c.lc(a, pc(e, b));
    });
    return c;
  }
  function pc(a, b) {
    var c = a.A().K(),
        c = lc(c, b),
        d;
    if (a.N()) {
      var e = lc(a.Ba(), b);
      return e !== a.Ba() || c !== a.A().K() ? new qc(e, L(c)) : a;
    }
    d = a;
    c !== a.A().K() && (d = d.da(new qc(c)));
    a.U(M, function(a, c) {
      var e = pc(c, b);
      e !== c && (d = d.Q(a, e));
    });
    return d;
  }
  ;
  function K(a, b) {
    if (1 == arguments.length) {
      this.o = a.split("/");
      for (var c = 0,
          d = 0; d < this.o.length; d++)
        0 < this.o[d].length && (this.o[c] = this.o[d], c++);
      this.o.length = c;
      this.Y = 0;
    } else
      this.o = a, this.Y = b;
  }
  function N(a, b) {
    var c = O(a);
    if (null === c)
      return b;
    if (c === O(b))
      return N(G(a), G(b));
    throw Error("INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")");
  }
  function O(a) {
    return a.Y >= a.o.length ? null : a.o[a.Y];
  }
  function rc(a) {
    return a.o.length - a.Y;
  }
  function G(a) {
    var b = a.Y;
    b < a.o.length && b++;
    return new K(a.o, b);
  }
  function sc(a) {
    return a.Y < a.o.length ? a.o[a.o.length - 1] : null;
  }
  h = K.prototype;
  h.toString = function() {
    for (var a = "",
        b = this.Y; b < this.o.length; b++)
      "" !== this.o[b] && (a += "/" + this.o[b]);
    return a || "/";
  };
  h.slice = function(a) {
    return this.o.slice(this.Y + (a || 0));
  };
  h.parent = function() {
    if (this.Y >= this.o.length)
      return null;
    for (var a = [],
        b = this.Y; b < this.o.length - 1; b++)
      a.push(this.o[b]);
    return new K(a, 0);
  };
  h.w = function(a) {
    for (var b = [],
        c = this.Y; c < this.o.length; c++)
      b.push(this.o[c]);
    if (a instanceof K)
      for (c = a.Y; c < a.o.length; c++)
        b.push(a.o[c]);
    else
      for (a = a.split("/"), c = 0; c < a.length; c++)
        0 < a[c].length && b.push(a[c]);
    return new K(b, 0);
  };
  h.e = function() {
    return this.Y >= this.o.length;
  };
  h.Z = function(a) {
    if (rc(this) !== rc(a))
      return !1;
    for (var b = this.Y,
        c = a.Y; b <= this.o.length; b++, c++)
      if (this.o[b] !== a.o[c])
        return !1;
    return !0;
  };
  h.contains = function(a) {
    var b = this.Y,
        c = a.Y;
    if (rc(this) > rc(a))
      return !1;
    for (; b < this.o.length; ) {
      if (this.o[b] !== a.o[c])
        return !1;
      ++b;
      ++c;
    }
    return !0;
  };
  var F = new K("");
  function tc(a, b) {
    this.Pa = a.slice();
    this.Da = Math.max(1, this.Pa.length);
    this.ef = b;
    for (var c = 0; c < this.Pa.length; c++)
      this.Da += uc(this.Pa[c]);
    vc(this);
  }
  tc.prototype.push = function(a) {
    0 < this.Pa.length && (this.Da += 1);
    this.Pa.push(a);
    this.Da += uc(a);
    vc(this);
  };
  tc.prototype.pop = function() {
    var a = this.Pa.pop();
    this.Da -= uc(a);
    0 < this.Pa.length && --this.Da;
  };
  function vc(a) {
    if (768 < a.Da)
      throw Error(a.ef + "has a key path longer than 768 bytes (" + a.Da + ").");
    if (32 < a.Pa.length)
      throw Error(a.ef + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + wc(a));
  }
  function wc(a) {
    return 0 == a.Pa.length ? "" : "in property '" + a.Pa.join(".") + "'";
  }
  ;
  function xc() {
    this.vc = {};
  }
  xc.prototype.set = function(a, b) {
    null == b ? delete this.vc[a] : this.vc[a] = b;
  };
  xc.prototype.get = function(a) {
    return v(this.vc, a) ? this.vc[a] : null;
  };
  xc.prototype.remove = function(a) {
    delete this.vc[a];
  };
  xc.prototype.of = !0;
  function yc(a) {
    this.Cc = a;
    this.Md = "firebase:";
  }
  h = yc.prototype;
  h.set = function(a, b) {
    null == b ? this.Cc.removeItem(this.Md + a) : this.Cc.setItem(this.Md + a, B(b));
  };
  h.get = function(a) {
    a = this.Cc.getItem(this.Md + a);
    return null == a ? null : jb(a);
  };
  h.remove = function(a) {
    this.Cc.removeItem(this.Md + a);
  };
  h.of = !1;
  h.toString = function() {
    return this.Cc.toString();
  };
  function zc(a) {
    try {
      if ("undefined" !== typeof window && "undefined" !== typeof window[a]) {
        var b = window[a];
        b.setItem("firebase:sentinel", "cache");
        b.removeItem("firebase:sentinel");
        return new yc(b);
      }
    } catch (c) {}
    return new xc;
  }
  var Ac = zc("localStorage"),
      Bc = zc("sessionStorage");
  function Cc(a, b, c, d, e) {
    this.host = a.toLowerCase();
    this.domain = this.host.substr(this.host.indexOf(".") + 1);
    this.ib = b;
    this.yb = c;
    this.Rg = d;
    this.Ld = e || "";
    this.Na = Ac.get("host:" + a) || this.host;
  }
  function Dc(a, b) {
    b !== a.Na && (a.Na = b, "s-" === a.Na.substr(0, 2) && Ac.set("host:" + a.host, a.Na));
  }
  Cc.prototype.toString = function() {
    var a = (this.ib ? "https://" : "http://") + this.host;
    this.Ld && (a += "<" + this.Ld + ">");
    return a;
  };
  var Ec = function() {
    var a = 1;
    return function() {
      return a++;
    };
  }();
  function I(a, b) {
    if (!a)
      throw Fc(b);
  }
  function Fc(a) {
    return Error("Firebase (2.2.2) INTERNAL ASSERT FAILED: " + a);
  }
  function Gc(a) {
    try {
      return (new Buffer(a, "base64")).toString("utf8");
    } catch (b) {
      yb("base64Decode failed: ", b);
    }
    return null;
  }
  function Hc(a) {
    var b = Ic(a);
    a = new La;
    a.update(b);
    var b = [],
        c = 8 * a.$d;
    56 > a.$b ? a.update(a.Id, 56 - a.$b) : a.update(a.Id, a.Va - (a.$b - 56));
    for (var d = a.Va - 1; 56 <= d; d--)
      a.ie[d] = c & 255, c /= 256;
    Ma(a, a.ie);
    for (d = c = 0; 5 > d; d++)
      for (var e = 24; 0 <= e; e -= 8)
        b[c] = a.R[d] >> e & 255, ++c;
    return db(b);
  }
  function Jc(a) {
    for (var b = "",
        c = 0; c < arguments.length; c++)
      b = fa(arguments[c]) ? b + Jc.apply(null, arguments[c]) : "object" === typeof arguments[c] ? b + B(arguments[c]) : b + arguments[c], b += " ";
    return b;
  }
  var xb = null,
      Kc = !0;
  function yb(a) {
    !0 === Kc && (Kc = !1, null === xb && !0 === Bc.get("logging_enabled") && Lc(!0));
    if (xb) {
      var b = Jc.apply(null, arguments);
      xb(b);
    }
  }
  function Mc(a) {
    return function() {
      yb(a, arguments);
    };
  }
  function Nc(a) {
    if ("undefined" !== typeof console) {
      var b = "FIREBASE INTERNAL ERROR: " + Jc.apply(null, arguments);
      "undefined" !== typeof console.error ? console.error(b) : console.log(b);
    }
  }
  function Oc(a) {
    var b = Jc.apply(null, arguments);
    throw Error("FIREBASE FATAL ERROR: " + b);
  }
  function P(a) {
    if ("undefined" !== typeof console) {
      var b = "FIREBASE WARNING: " + Jc.apply(null, arguments);
      "undefined" !== typeof console.warn ? console.warn(b) : console.log(b);
    }
  }
  function Pc(a) {
    var b = "",
        c = "",
        d = "",
        e = "",
        f = !0,
        g = "https",
        k = 443;
    if (p(a)) {
      var l = a.indexOf("//");
      0 <= l && (g = a.substring(0, l - 1), a = a.substring(l + 2));
      l = a.indexOf("/");
      -1 === l && (l = a.length);
      b = a.substring(0, l);
      e = "";
      a = a.substring(l).split("/");
      for (l = 0; l < a.length; l++)
        if (0 < a[l].length) {
          var m = a[l];
          try {
            m = decodeURIComponent(m.replace(/\+/g, " "));
          } catch (t) {}
          e += "/" + m;
        }
      a = b.split(".");
      3 === a.length ? (c = a[1], d = a[0].toLowerCase()) : 2 === a.length && (c = a[0]);
      l = b.indexOf(":");
      0 <= l && (f = "https" === g || "wss" === g, k = b.substring(l + 1), isFinite(k) && (k = String(k)), k = p(k) ? /^\s*-?0x/i.test(k) ? parseInt(k, 16) : parseInt(k, 10) : NaN);
    }
    return {
      host: b,
      port: k,
      domain: c,
      Ng: d,
      ib: f,
      scheme: g,
      ic: e
    };
  }
  function Qc(a) {
    return ga(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY);
  }
  function Rc(a) {
    a();
  }
  function Pb(a, b) {
    if (a === b)
      return 0;
    if ("[MIN_NAME]" === a || "[MAX_NAME]" === b)
      return -1;
    if ("[MIN_NAME]" === b || "[MAX_NAME]" === a)
      return 1;
    var c = Sc(a),
        d = Sc(b);
    return null !== c ? null !== d ? 0 == c - d ? a.length - b.length : c - d : -1 : null !== d ? 1 : a < b ? -1 : 1;
  }
  function Tc(a, b) {
    if (b && a in b)
      return b[a];
    throw Error("Missing required key (" + a + ") in object: " + B(b));
  }
  function Uc(a) {
    if ("object" !== typeof a || null === a)
      return B(a);
    var b = [],
        c;
    for (c in a)
      b.push(c);
    b.sort();
    c = "{";
    for (var d = 0; d < b.length; d++)
      0 !== d && (c += ","), c += B(b[d]), c += ":", c += Uc(a[b[d]]);
    return c + "}";
  }
  function Vc(a, b) {
    if (a.length <= b)
      return [a];
    for (var c = [],
        d = 0; d < a.length; d += b)
      d + b > a ? c.push(a.substring(d, a.length)) : c.push(a.substring(d, d + b));
    return c;
  }
  function Wc(a, b) {
    if (ea(a))
      for (var c = 0; c < a.length; ++c)
        b(c, a[c]);
    else
      r(a, b);
  }
  function Xc(a) {
    I(!Qc(a), "Invalid JSON number");
    var b,
        c,
        d,
        e;
    0 === a ? (d = c = 0, b = -Infinity === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074))));
    e = [];
    for (a = 52; a; --a)
      e.push(d % 2 ? 1 : 0), d = Math.floor(d / 2);
    for (a = 11; a; --a)
      e.push(c % 2 ? 1 : 0), c = Math.floor(c / 2);
    e.push(b ? 1 : 0);
    e.reverse();
    b = e.join("");
    c = "";
    for (a = 0; 64 > a; a += 8)
      d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length && (d = "0" + d), c += d;
    return c.toLowerCase();
  }
  var Yc = /^-?\d{1,10}$/;
  function Sc(a) {
    return Yc.test(a) && (a = Number(a), -2147483648 <= a && 2147483647 >= a) ? a : null;
  }
  function zb(a) {
    try {
      a();
    } catch (b) {
      setTimeout(function() {
        P("Exception was thrown by user callback.", b.stack || "");
        throw b;
      }, Math.floor(0));
    }
  }
  function Q(a, b) {
    if (ha(a)) {
      var c = Array.prototype.slice.call(arguments, 1).slice();
      zb(function() {
        a.apply(null, c);
      });
    }
  }
  ;
  function Ic(a) {
    for (var b = [],
        c = 0,
        d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      55296 <= e && 56319 >= e && (e -= 55296, d++, I(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e << 10) + (a.charCodeAt(d) - 56320));
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (65536 > e ? b[c++] = e >> 12 | 224 : (b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128), b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
    }
    return b;
  }
  function uc(a) {
    for (var b = 0,
        c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      128 > d ? b++ : 2048 > d ? b += 2 : 55296 <= d && 56319 >= d ? (b += 4, c++) : b += 3;
    }
    return b;
  }
  ;
  function Zc(a) {
    var b = {},
        c = {},
        d = {},
        e = "";
    try {
      var f = a.split("."),
          b = jb(Gc(f[0]) || ""),
          c = jb(Gc(f[1]) || ""),
          e = f[2],
          d = c.d || {};
      delete c.d;
    } catch (g) {}
    return {
      Wg: b,
      zc: c,
      data: d,
      Kg: e
    };
  }
  function $c(a) {
    a = Zc(a).zc;
    return "object" === typeof a && a.hasOwnProperty("iat") ? w(a, "iat") : null;
  }
  function ad(a) {
    a = Zc(a);
    var b = a.zc;
    return !!a.Kg && !!b && "object" === typeof b && b.hasOwnProperty("iat");
  }
  ;
  function bd(a) {
    this.V = a;
    this.g = a.n.g;
  }
  function cd(a, b, c, d) {
    var e = [],
        f = [];
    Oa(b, function(b) {
      "child_changed" === b.type && a.g.wd(b.Ge, b.Ia) && f.push(new D("child_moved", b.Ia, b.Xa));
    });
    dd(a, e, "child_removed", b, d, c);
    dd(a, e, "child_added", b, d, c);
    dd(a, e, "child_moved", f, d, c);
    dd(a, e, "child_changed", b, d, c);
    dd(a, e, Bb, b, d, c);
    return e;
  }
  function dd(a, b, c, d, e, f) {
    d = Pa(d, function(a) {
      return a.type === c;
    });
    Wa(d, q(a.bg, a));
    Oa(d, function(c) {
      var d = ed(a, c, f);
      Oa(e, function(e) {
        e.Ef(c.type) && b.push(e.createEvent(d, a.V));
      });
    });
  }
  function ed(a, b, c) {
    "value" !== b.type && "child_removed" !== b.type && (b.Nd = c.kf(b.Xa, b.Ia, a.g));
    return b;
  }
  bd.prototype.bg = function(a, b) {
    if (null == a.Xa || null == b.Xa)
      throw Fc("Should only compare child_ events.");
    return this.g.compare(new E(a.Xa, a.Ia), new E(b.Xa, b.Ia));
  };
  function fd() {
    this.bb = {};
  }
  function gd(a, b) {
    var c = b.type,
        d = b.Xa;
    I("child_added" == c || "child_changed" == c || "child_removed" == c, "Only child changes supported for tracking");
    I(".priority" !== d, "Only non-priority child changes can be tracked.");
    var e = w(a.bb, d);
    if (e) {
      var f = e.type;
      if ("child_added" == c && "child_removed" == f)
        a.bb[d] = new D("child_changed", b.Ia, d, e.Ia);
      else if ("child_removed" == c && "child_added" == f)
        delete a.bb[d];
      else if ("child_removed" == c && "child_changed" == f)
        a.bb[d] = new D("child_removed", e.Ge, d);
      else if ("child_changed" == c && "child_added" == f)
        a.bb[d] = new D("child_added", b.Ia, d);
      else if ("child_changed" == c && "child_changed" == f)
        a.bb[d] = new D("child_changed", b.Ia, d, e.Ge);
      else
        throw Fc("Illegal combination of changes: " + b + " occurred after " + e);
    } else
      a.bb[d] = b;
  }
  ;
  function hd(a, b, c) {
    this.Mb = a;
    this.nb = b;
    this.pb = c || null;
  }
  h = hd.prototype;
  h.Ef = function(a) {
    return "value" === a;
  };
  h.createEvent = function(a, b) {
    var c = b.n.g;
    return new Cb("value", this, new R(a.Ia, b.kc(), c));
  };
  h.Tb = function(a) {
    var b = this.pb;
    if ("cancel" === a.ve()) {
      I(this.nb, "Raising a cancel event on a listener with no cancel callback");
      var c = this.nb;
      return function() {
        c.call(b, a.error);
      };
    }
    var d = this.Mb;
    return function() {
      d.call(b, a.Ud);
    };
  };
  h.af = function(a, b) {
    return this.nb ? new Db(this, a, b) : null;
  };
  h.matches = function(a) {
    return a instanceof hd ? a.Mb && this.Mb ? a.Mb === this.Mb && a.pb === this.pb : !0 : !1;
  };
  h.mf = function() {
    return null !== this.Mb;
  };
  function id(a, b, c) {
    this.ga = a;
    this.nb = b;
    this.pb = c;
  }
  h = id.prototype;
  h.Ef = function(a) {
    a = "children_added" === a ? "child_added" : a;
    return ("children_removed" === a ? "child_removed" : a) in this.ga;
  };
  h.af = function(a, b) {
    return this.nb ? new Db(this, a, b) : null;
  };
  h.createEvent = function(a, b) {
    I(null != a.Xa, "Child events should have a childName.");
    var c = b.kc().w(a.Xa);
    return new Cb(a.type, this, new R(a.Ia, c, b.n.g), a.Nd);
  };
  h.Tb = function(a) {
    var b = this.pb;
    if ("cancel" === a.ve()) {
      I(this.nb, "Raising a cancel event on a listener with no cancel callback");
      var c = this.nb;
      return function() {
        c.call(b, a.error);
      };
    }
    var d = this.ga[a.qd];
    return function() {
      d.call(b, a.Ud, a.Nd);
    };
  };
  h.matches = function(a) {
    if (a instanceof id) {
      if (!this.ga || !a.ga)
        return !0;
      if (this.pb === a.pb) {
        var b = pa(a.ga);
        if (b === pa(this.ga)) {
          if (1 === b) {
            var b = qa(a.ga),
                c = qa(this.ga);
            return c === b && (!a.ga[b] || !this.ga[c] || a.ga[b] === this.ga[c]);
          }
          return oa(this.ga, function(b, c) {
            return a.ga[c] === b;
          });
        }
      }
    }
    return !1;
  };
  h.mf = function() {
    return null !== this.ga;
  };
  function jd(a) {
    this.g = a;
  }
  h = jd.prototype;
  h.G = function(a, b, c, d, e) {
    I(a.Gc(this.g), "A node must be indexed if only a child is updated");
    d = a.M(b);
    if (d.Z(c))
      return a;
    null != e && (c.e() ? a.Ga(b) ? gd(e, new D("child_removed", d, b)) : I(a.N(), "A child remove without an old child only makes sense on a leaf node") : d.e() ? gd(e, new D("child_added", c, b)) : gd(e, new D("child_changed", c, b, d)));
    return a.N() && c.e() ? a : a.Q(b, c).jb(this.g);
  };
  h.ta = function(a, b, c) {
    null != c && (a.N() || a.U(M, function(a, e) {
      b.Ga(a) || gd(c, new D("child_removed", e, a));
    }), b.N() || b.U(M, function(b, e) {
      if (a.Ga(b)) {
        var f = a.M(b);
        f.Z(e) || gd(c, new D("child_changed", e, b, f));
      } else
        gd(c, new D("child_added", e, b));
    }));
    return b.jb(this.g);
  };
  h.da = function(a, b) {
    return a.e() ? C : a.da(b);
  };
  h.Fa = function() {
    return !1;
  };
  h.Ub = function() {
    return this;
  };
  function kd(a) {
    this.xe = new jd(a.g);
    this.g = a.g;
    var b;
    a.la ? (b = ld(a), b = a.g.Mc(md(a), b)) : b = a.g.Qc();
    this.cd = b;
    a.na ? (b = nd(a), a = a.g.Mc(od(a), b)) : a = a.g.Nc();
    this.Dc = a;
  }
  h = kd.prototype;
  h.matches = function(a) {
    return 0 >= this.g.compare(this.cd, a) && 0 >= this.g.compare(a, this.Dc);
  };
  h.G = function(a, b, c, d, e) {
    this.matches(new E(b, c)) || (c = C);
    return this.xe.G(a, b, c, d, e);
  };
  h.ta = function(a, b, c) {
    b.N() && (b = C);
    var d = b.jb(this.g),
        d = d.da(C),
        e = this;
    b.U(M, function(a, b) {
      e.matches(new E(a, b)) || (d = d.Q(a, C));
    });
    return this.xe.ta(a, d, c);
  };
  h.da = function(a) {
    return a;
  };
  h.Fa = function() {
    return !0;
  };
  h.Ub = function() {
    return this.xe;
  };
  function pd(a) {
    this.ra = new kd(a);
    this.g = a.g;
    I(a.ia, "Only valid if limit has been set");
    this.ja = a.ja;
    this.Fb = !qd(a);
  }
  h = pd.prototype;
  h.G = function(a, b, c, d, e) {
    this.ra.matches(new E(b, c)) || (c = C);
    return a.M(b).Z(c) ? a : a.zb() < this.ja ? this.ra.Ub().G(a, b, c, d, e) : rd(this, a, b, c, d, e);
  };
  h.ta = function(a, b, c) {
    var d;
    if (b.N() || b.e())
      d = C.jb(this.g);
    else if (2 * this.ja < b.zb() && b.Gc(this.g)) {
      d = C.jb(this.g);
      b = this.Fb ? b.Zb(this.ra.Dc, this.g) : b.Xb(this.ra.cd, this.g);
      for (var e = 0; 0 < b.Oa.length && e < this.ja; ) {
        var f = H(b),
            g;
        if (g = this.Fb ? 0 >= this.g.compare(this.ra.cd, f) : 0 >= this.g.compare(f, this.ra.Dc))
          d = d.Q(f.name, f.S), e++;
        else
          break;
      }
    } else {
      d = b.jb(this.g);
      d = d.da(C);
      var k,
          l,
          m;
      if (this.Fb) {
        b = d.lf(this.g);
        k = this.ra.Dc;
        l = this.ra.cd;
        var t = td(this.g);
        m = function(a, b) {
          return t(b, a);
        };
      } else
        b = d.Wb(this.g), k = this.ra.cd, l = this.ra.Dc, m = td(this.g);
      for (var e = 0,
          x = !1; 0 < b.Oa.length; )
        f = H(b), !x && 0 >= m(k, f) && (x = !0), (g = x && e < this.ja && 0 >= m(f, l)) ? e++ : d = d.Q(f.name, C);
    }
    return this.ra.Ub().ta(a, d, c);
  };
  h.da = function(a) {
    return a;
  };
  h.Fa = function() {
    return !0;
  };
  h.Ub = function() {
    return this.ra.Ub();
  };
  function rd(a, b, c, d, e, f) {
    var g;
    if (a.Fb) {
      var k = td(a.g);
      g = function(a, b) {
        return k(b, a);
      };
    } else
      g = td(a.g);
    I(b.zb() == a.ja, "");
    var l = new E(c, d),
        m = a.Fb ? ud(b, a.g) : vd(b, a.g),
        t = a.ra.matches(l);
    if (b.Ga(c)) {
      var x = b.M(c),
          m = e.ue(a.g, m, a.Fb);
      null != m && m.name == c && (m = e.ue(a.g, m, a.Fb));
      e = null == m ? 1 : g(m, l);
      if (t && !d.e() && 0 <= e)
        return null != f && gd(f, new D("child_changed", d, c, x)), b.Q(c, d);
      null != f && gd(f, new D("child_removed", x, c));
      b = b.Q(c, C);
      return null != m && a.ra.matches(m) ? (null != f && gd(f, new D("child_added", m.S, m.name)), b.Q(m.name, m.S)) : b;
    }
    return d.e() ? b : t && 0 <= g(m, l) ? (null != f && (gd(f, new D("child_removed", m.S, m.name)), gd(f, new D("child_added", d, c))), b.Q(c, d).Q(m.name, C)) : b;
  }
  ;
  function wd(a, b) {
    this.ee = a;
    this.Zf = b;
  }
  function xd(a) {
    this.I = a;
  }
  xd.prototype.ab = function(a, b, c, d) {
    var e = new fd,
        f;
    if (b.type === Sb)
      b.source.se ? c = yd(this, a, b.path, b.Ha, c, d, e) : (I(b.source.hf, "Unknown source."), f = b.source.We, c = zd(this, a, b.path, b.Ha, c, d, f, e));
    else if (b.type === Ad)
      b.source.se ? c = Bd(this, a, b.path, b.children, c, d, e) : (I(b.source.hf, "Unknown source."), f = b.source.We, c = Cd(this, a, b.path, b.children, c, d, f, e));
    else if (b.type === Ub)
      if (b.Qe)
        if (f = b.path, null != c.rc(f))
          c = a;
        else {
          b = new nb(c, a, d);
          d = a.D.j();
          if (f.e() || ".priority" === O(f))
            Eb(a.u()) ? b = c.ua(qb(a)) : (b = a.u().j(), I(b instanceof S, "serverChildren would be complete if leaf node"), b = c.wc(b)), b = this.I.ta(d, b, e);
          else {
            f = O(f);
            var g = c.Wa(f, a.u());
            null == g && ob(a.u(), f) && (g = d.M(f));
            b = null != g ? this.I.G(d, f, g, b, e) : a.D.j().Ga(f) ? this.I.G(d, f, C, b, e) : d;
            b.e() && Eb(a.u()) && (d = c.ua(qb(a)), d.N() && (b = this.I.ta(b, d, e)));
          }
          d = Eb(a.u()) || null != c.rc(F);
          c = Dd(a, b, d, this.I.Fa());
        }
      else
        c = Ed(this, a, b.path, c, d, e);
    else if (b.type === Xb)
      d = b.path, b = a.u(), f = b.j(), g = b.$ || d.e(), c = Fd(this, new Gd(a.D, new pb(f, g, b.Sb)), d, c, mb, e);
    else
      throw Fc("Unknown operation type: " + b.type);
    e = ra(e.bb);
    d = c;
    b = d.D;
    b.$ && (f = b.j().N() || b.j().e(), g = Hd(a), (0 < e.length || !a.D.$ || f && !b.j().Z(g) || !b.j().A().Z(g.A())) && e.push(Ab(Hd(d))));
    return new wd(c, e);
  };
  function Fd(a, b, c, d, e, f) {
    var g = b.D;
    if (null != d.rc(c))
      return b;
    var k;
    if (c.e())
      I(Eb(b.u()), "If change path is empty, we must have complete server data"), b.u().Sb ? (e = qb(b), d = d.wc(e instanceof S ? e : C)) : d = d.ua(qb(b)), f = a.I.ta(b.D.j(), d, f);
    else {
      var l = O(c);
      if (".priority" == l)
        I(1 == rc(c), "Can't have a priority with additional path components"), f = g.j(), k = b.u().j(), d = d.gd(c, f, k), f = null != d ? a.I.da(f, d) : g.j();
      else {
        var m = G(c);
        ob(g, l) ? (k = b.u().j(), d = d.gd(c, g.j(), k), d = null != d ? g.j().M(l).G(m, d) : g.j().M(l)) : d = d.Wa(l, b.u());
        f = null != d ? a.I.G(g.j(), l, d, e, f) : g.j();
      }
    }
    return Dd(b, f, g.$ || c.e(), a.I.Fa());
  }
  function zd(a, b, c, d, e, f, g, k) {
    var l = b.u();
    g = g ? a.I : a.I.Ub();
    if (c.e())
      d = g.ta(l.j(), d, null);
    else if (g.Fa() && !l.Sb)
      d = l.j().G(c, d), d = g.ta(l.j(), d, null);
    else {
      var m = O(c);
      if ((c.e() ? !l.$ || l.Sb : !ob(l, O(c))) && 1 < rc(c))
        return b;
      d = l.j().M(m).G(G(c), d);
      d = ".priority" == m ? g.da(l.j(), d) : g.G(l.j(), m, d, mb, null);
    }
    l = l.$ || c.e();
    b = new Gd(b.D, new pb(d, l, g.Fa()));
    return Fd(a, b, c, e, new nb(e, b, f), k);
  }
  function yd(a, b, c, d, e, f, g) {
    var k = b.D;
    e = new nb(e, b, f);
    if (c.e())
      g = a.I.ta(b.D.j(), d, g), a = Dd(b, g, !0, a.I.Fa());
    else if (f = O(c), ".priority" === f)
      g = a.I.da(b.D.j(), d), a = Dd(b, g, k.$, k.Sb);
    else {
      var l = G(c);
      c = k.j().M(f);
      if (!l.e()) {
        var m = e.jf(f);
        d = null != m ? ".priority" === sc(l) && m.oa(l.parent()).e() ? m : m.G(l, d) : C;
      }
      c.Z(d) ? a = b : (g = a.I.G(k.j(), f, d, e, g), a = Dd(b, g, k.$, a.I.Fa()));
    }
    return a;
  }
  function Bd(a, b, c, d, e, f, g) {
    var k = b;
    Id(d, function(d, m) {
      var t = c.w(d);
      ob(b.D, O(t)) && (k = yd(a, k, t, m, e, f, g));
    });
    Id(d, function(d, m) {
      var t = c.w(d);
      ob(b.D, O(t)) || (k = yd(a, k, t, m, e, f, g));
    });
    return k;
  }
  function Jd(a, b) {
    Id(b, function(b, d) {
      a = a.G(b, d);
    });
    return a;
  }
  function Cd(a, b, c, d, e, f, g, k) {
    if (b.u().j().e() && !Eb(b.u()))
      return b;
    var l = b;
    c = c.e() ? d : Kd(Ld, c, d);
    var m = b.u().j();
    c.children.ha(function(c, d) {
      if (m.Ga(c)) {
        var J = b.u().j().M(c),
            J = Jd(J, d);
        l = zd(a, l, new K(c), J, e, f, g, k);
      }
    });
    c.children.ha(function(c, d) {
      var J = !Eb(b.u()) && null == d.value;
      m.Ga(c) || J || (J = b.u().j().M(c), J = Jd(J, d), l = zd(a, l, new K(c), J, e, f, g, k));
    });
    return l;
  }
  function Ed(a, b, c, d, e, f) {
    if (null != d.rc(c))
      return b;
    var g = new nb(d, b, e),
        k = e = b.D.j();
    if (Eb(b.u())) {
      if (c.e())
        e = d.ua(qb(b)), k = a.I.ta(b.D.j(), e, f);
      else if (".priority" === O(c)) {
        var l = d.Wa(O(c), b.u());
        null == l || e.e() || e.A().Z(l) || (k = a.I.da(e, l));
      } else
        l = O(c), e = d.Wa(l, b.u()), null != e && (k = a.I.G(b.D.j(), l, e, g, f));
      e = !0;
    } else if (b.D.$ || c.e())
      k = e, e = b.D.j(), e.N() || e.U(M, function(c) {
        var e = d.Wa(c, b.u());
        null != e && (k = a.I.G(k, c, e, g, f));
      }), e = b.D.$;
    else {
      l = O(c);
      if (1 == rc(c) || ob(b.D, l))
        c = d.Wa(l, b.u()), null != c && (k = a.I.G(e, l, c, g, f));
      e = !1;
    }
    return Dd(b, k, e, a.I.Fa());
  }
  ;
  function Md() {}
  var Nd = {};
  function td(a) {
    return q(a.compare, a);
  }
  Md.prototype.wd = function(a, b) {
    return 0 !== this.compare(new E("[MIN_NAME]", a), new E("[MIN_NAME]", b));
  };
  Md.prototype.Qc = function() {
    return Od;
  };
  function Pd(a) {
    this.bc = a;
  }
  ma(Pd, Md);
  h = Pd.prototype;
  h.Fc = function(a) {
    return !a.M(this.bc).e();
  };
  h.compare = function(a, b) {
    var c = a.S.M(this.bc),
        d = b.S.M(this.bc),
        c = c.Ac(d);
    return 0 === c ? Pb(a.name, b.name) : c;
  };
  h.Mc = function(a, b) {
    var c = L(a),
        c = C.Q(this.bc, c);
    return new E(b, c);
  };
  h.Nc = function() {
    var a = C.Q(this.bc, Qd);
    return new E("[MAX_NAME]", a);
  };
  h.toString = function() {
    return this.bc;
  };
  function Rd() {}
  ma(Rd, Md);
  h = Rd.prototype;
  h.compare = function(a, b) {
    var c = a.S.A(),
        d = b.S.A(),
        c = c.Ac(d);
    return 0 === c ? Pb(a.name, b.name) : c;
  };
  h.Fc = function(a) {
    return !a.A().e();
  };
  h.wd = function(a, b) {
    return !a.A().Z(b.A());
  };
  h.Qc = function() {
    return Od;
  };
  h.Nc = function() {
    return new E("[MAX_NAME]", new qc("[PRIORITY-POST]", Qd));
  };
  h.Mc = function(a, b) {
    var c = L(a);
    return new E(b, new qc("[PRIORITY-POST]", c));
  };
  h.toString = function() {
    return ".priority";
  };
  var M = new Rd;
  function Sd() {}
  ma(Sd, Md);
  h = Sd.prototype;
  h.compare = function(a, b) {
    return Pb(a.name, b.name);
  };
  h.Fc = function() {
    throw Fc("KeyIndex.isDefinedOn not expected to be called.");
  };
  h.wd = function() {
    return !1;
  };
  h.Qc = function() {
    return Od;
  };
  h.Nc = function() {
    return new E("[MAX_NAME]", C);
  };
  h.Mc = function(a) {
    I(p(a), "KeyIndex indexValue must always be a string.");
    return new E(a, C);
  };
  h.toString = function() {
    return ".key";
  };
  var Td = new Sd;
  function Ud() {}
  ma(Ud, Md);
  h = Ud.prototype;
  h.compare = function(a, b) {
    var c = a.S.Ac(b.S);
    return 0 === c ? Pb(a.name, b.name) : c;
  };
  h.Fc = function() {
    return !0;
  };
  h.wd = function(a, b) {
    return !a.Z(b);
  };
  h.Qc = function() {
    return Od;
  };
  h.Nc = function() {
    return Vd;
  };
  h.Mc = function(a, b) {
    var c = L(a);
    return new E(b, c);
  };
  h.toString = function() {
    return ".value";
  };
  var Wd = new Ud;
  function Xd() {
    this.Qb = this.na = this.Ib = this.la = this.ia = !1;
    this.ja = 0;
    this.Kb = "";
    this.dc = null;
    this.tb = "";
    this.ac = null;
    this.rb = "";
    this.g = M;
  }
  var Yd = new Xd;
  function qd(a) {
    return "" === a.Kb ? a.la : "l" === a.Kb;
  }
  function md(a) {
    I(a.la, "Only valid if start has been set");
    return a.dc;
  }
  function ld(a) {
    I(a.la, "Only valid if start has been set");
    return a.Ib ? a.tb : "[MIN_NAME]";
  }
  function od(a) {
    I(a.na, "Only valid if end has been set");
    return a.ac;
  }
  function nd(a) {
    I(a.na, "Only valid if end has been set");
    return a.Qb ? a.rb : "[MAX_NAME]";
  }
  function Zd(a) {
    var b = new Xd;
    b.ia = a.ia;
    b.ja = a.ja;
    b.la = a.la;
    b.dc = a.dc;
    b.Ib = a.Ib;
    b.tb = a.tb;
    b.na = a.na;
    b.ac = a.ac;
    b.Qb = a.Qb;
    b.rb = a.rb;
    b.g = a.g;
    return b;
  }
  h = Xd.prototype;
  h.Ce = function(a) {
    var b = Zd(this);
    b.ia = !0;
    b.ja = a;
    b.Kb = "";
    return b;
  };
  h.De = function(a) {
    var b = Zd(this);
    b.ia = !0;
    b.ja = a;
    b.Kb = "l";
    return b;
  };
  h.Ee = function(a) {
    var b = Zd(this);
    b.ia = !0;
    b.ja = a;
    b.Kb = "r";
    return b;
  };
  h.Vd = function(a, b) {
    var c = Zd(this);
    c.la = !0;
    n(a) || (a = null);
    c.dc = a;
    null != b ? (c.Ib = !0, c.tb = b) : (c.Ib = !1, c.tb = "");
    return c;
  };
  h.pd = function(a, b) {
    var c = Zd(this);
    c.na = !0;
    n(a) || (a = null);
    c.ac = a;
    n(b) ? (c.Qb = !0, c.rb = b) : (c.Yg = !1, c.rb = "");
    return c;
  };
  function $d(a, b) {
    var c = Zd(a);
    c.g = b;
    return c;
  }
  function ae(a) {
    var b = {};
    a.la && (b.sp = a.dc, a.Ib && (b.sn = a.tb));
    a.na && (b.ep = a.ac, a.Qb && (b.en = a.rb));
    if (a.ia) {
      b.l = a.ja;
      var c = a.Kb;
      "" === c && (c = qd(a) ? "l" : "r");
      b.vf = c;
    }
    a.g !== M && (b.i = a.g.toString());
    return b;
  }
  function be(a) {
    return !(a.la || a.na || a.ia);
  }
  function ce(a) {
    var b = {};
    if (be(a) && a.g == M)
      return b;
    var c;
    a.g === M ? c = "$priority" : a.g === Wd ? c = "$value" : (I(a.g instanceof Pd, "Unrecognized index type!"), c = a.g.toString());
    b.orderBy = B(c);
    a.la && (b.startAt = B(a.dc), a.Ib && (b.startAt += "," + B(a.tb)));
    a.na && (b.endAt = B(a.ac), a.Qb && (b.endAt += "," + B(a.rb)));
    a.ia && (qd(a) ? b.limitToFirst = a.ja : b.limitToLast = a.ja);
    return b;
  }
  h.toString = function() {
    return B(ae(this));
  };
  function de(a, b) {
    this.xd = a;
    this.cc = b;
  }
  de.prototype.get = function(a) {
    var b = w(this.xd, a);
    if (!b)
      throw Error("No index defined for " + a);
    return b === Nd ? null : b;
  };
  function ee(a, b, c) {
    var d = na(a.xd, function(d, f) {
      var g = w(a.cc, f);
      I(g, "Missing index implementation for " + f);
      if (d === Nd) {
        if (g.Fc(b.S)) {
          for (var k = [],
              l = c.Wb(Nb),
              m = H(l); m; )
            m.name != b.name && k.push(m), m = H(l);
          k.push(b);
          return fe(k, td(g));
        }
        return Nd;
      }
      g = c.get(b.name);
      k = d;
      g && (k = k.remove(new E(b.name, g)));
      return k.Ma(b, b.S);
    });
    return new de(d, a.cc);
  }
  function ge(a, b, c) {
    var d = na(a.xd, function(a) {
      if (a === Nd)
        return a;
      var d = c.get(b.name);
      return d ? a.remove(new E(b.name, d)) : a;
    });
    return new de(d, a.cc);
  }
  var he = new de({".priority": Nd}, {".priority": M});
  function qc(a, b) {
    this.C = a;
    I(n(this.C) && null !== this.C, "LeafNode shouldn't be created with null/undefined value.");
    this.ba = b || C;
    ie(this.ba);
    this.xb = null;
  }
  h = qc.prototype;
  h.N = function() {
    return !0;
  };
  h.A = function() {
    return this.ba;
  };
  h.da = function(a) {
    return new qc(this.C, a);
  };
  h.M = function(a) {
    return ".priority" === a ? this.ba : C;
  };
  h.oa = function(a) {
    return a.e() ? this : ".priority" === O(a) ? this.ba : C;
  };
  h.Ga = function() {
    return !1;
  };
  h.kf = function() {
    return null;
  };
  h.Q = function(a, b) {
    return ".priority" === a ? this.da(b) : b.e() && ".priority" !== a ? this : C.Q(a, b).da(this.ba);
  };
  h.G = function(a, b) {
    var c = O(a);
    if (null === c)
      return b;
    if (b.e() && ".priority" !== c)
      return this;
    I(".priority" !== c || 1 === rc(a), ".priority must be the last token in a path");
    return this.Q(c, C.G(G(a), b));
  };
  h.e = function() {
    return !1;
  };
  h.zb = function() {
    return 0;
  };
  h.K = function(a) {
    return a && !this.A().e() ? {
      ".value": this.Ba(),
      ".priority": this.A().K()
    } : this.Ba();
  };
  h.hash = function() {
    if (null === this.xb) {
      var a = "";
      this.ba.e() || (a += "priority:" + je(this.ba.K()) + ":");
      var b = typeof this.C,
          a = a + (b + ":"),
          a = "number" === b ? a + Xc(this.C) : a + this.C;
      this.xb = Hc(a);
    }
    return this.xb;
  };
  h.Ba = function() {
    return this.C;
  };
  h.Ac = function(a) {
    if (a === C)
      return 1;
    if (a instanceof S)
      return -1;
    I(a.N(), "Unknown node type");
    var b = typeof a.C,
        c = typeof this.C,
        d = Na(ke, b),
        e = Na(ke, c);
    I(0 <= d, "Unknown leaf type: " + b);
    I(0 <= e, "Unknown leaf type: " + c);
    return d === e ? "object" === c ? 0 : this.C < a.C ? -1 : this.C === a.C ? 0 : 1 : e - d;
  };
  var ke = ["object", "boolean", "number", "string"];
  qc.prototype.jb = function() {
    return this;
  };
  qc.prototype.Gc = function() {
    return !0;
  };
  qc.prototype.Z = function(a) {
    return a === this ? !0 : a.N() ? this.C === a.C && this.ba.Z(a.ba) : !1;
  };
  qc.prototype.toString = function() {
    return B(this.K(!0));
  };
  function S(a, b, c) {
    this.m = a;
    (this.ba = b) && ie(this.ba);
    a.e() && I(!this.ba || this.ba.e(), "An empty node cannot have a priority");
    this.sb = c;
    this.xb = null;
  }
  h = S.prototype;
  h.N = function() {
    return !1;
  };
  h.A = function() {
    return this.ba || C;
  };
  h.da = function(a) {
    return this.m.e() ? this : new S(this.m, a, this.sb);
  };
  h.M = function(a) {
    if (".priority" === a)
      return this.A();
    a = this.m.get(a);
    return null === a ? C : a;
  };
  h.oa = function(a) {
    var b = O(a);
    return null === b ? this : this.M(b).oa(G(a));
  };
  h.Ga = function(a) {
    return null !== this.m.get(a);
  };
  h.Q = function(a, b) {
    I(b, "We should always be passing snapshot nodes");
    if (".priority" === a)
      return this.da(b);
    var c = new E(a, b),
        d,
        e;
    b.e() ? (d = this.m.remove(a), c = ge(this.sb, c, this.m)) : (d = this.m.Ma(a, b), c = ee(this.sb, c, this.m));
    e = d.e() ? C : this.ba;
    return new S(d, e, c);
  };
  h.G = function(a, b) {
    var c = O(a);
    if (null === c)
      return b;
    I(".priority" !== O(a) || 1 === rc(a), ".priority must be the last token in a path");
    var d = this.M(c).G(G(a), b);
    return this.Q(c, d);
  };
  h.e = function() {
    return this.m.e();
  };
  h.zb = function() {
    return this.m.count();
  };
  var le = /^(0|[1-9]\d*)$/;
  h = S.prototype;
  h.K = function(a) {
    if (this.e())
      return null;
    var b = {},
        c = 0,
        d = 0,
        e = !0;
    this.U(M, function(f, g) {
      b[f] = g.K(a);
      c++;
      e && le.test(f) ? d = Math.max(d, Number(f)) : e = !1;
    });
    if (!a && e && d < 2 * c) {
      var f = [],
          g;
      for (g in b)
        f[g] = b[g];
      return f;
    }
    a && !this.A().e() && (b[".priority"] = this.A().K());
    return b;
  };
  h.hash = function() {
    if (null === this.xb) {
      var a = "";
      this.A().e() || (a += "priority:" + je(this.A().K()) + ":");
      this.U(M, function(b, c) {
        var d = c.hash();
        "" !== d && (a += ":" + b + ":" + d);
      });
      this.xb = "" === a ? "" : Hc(a);
    }
    return this.xb;
  };
  h.kf = function(a, b, c) {
    return (c = me(this, c)) ? (a = $b(c, new E(a, b))) ? a.name : null : $b(this.m, a);
  };
  function ud(a, b) {
    var c;
    c = (c = me(a, b)) ? (c = c.Pc()) && c.name : a.m.Pc();
    return c ? new E(c, a.m.get(c)) : null;
  }
  function vd(a, b) {
    var c;
    c = (c = me(a, b)) ? (c = c.ec()) && c.name : a.m.ec();
    return c ? new E(c, a.m.get(c)) : null;
  }
  h.U = function(a, b) {
    var c = me(this, a);
    return c ? c.ha(function(a) {
      return b(a.name, a.S);
    }) : this.m.ha(b);
  };
  h.Wb = function(a) {
    return this.Xb(a.Qc(), a);
  };
  h.Xb = function(a, b) {
    var c = me(this, b);
    if (c)
      return c.Xb(a, function(a) {
        return a;
      });
    for (var c = this.m.Xb(a.name, Nb),
        d = bc(c); null != d && 0 > b.compare(d, a); )
      H(c), d = bc(c);
    return c;
  };
  h.lf = function(a) {
    return this.Zb(a.Nc(), a);
  };
  h.Zb = function(a, b) {
    var c = me(this, b);
    if (c)
      return c.Zb(a, function(a) {
        return a;
      });
    for (var c = this.m.Zb(a.name, Nb),
        d = bc(c); null != d && 0 < b.compare(d, a); )
      H(c), d = bc(c);
    return c;
  };
  h.Ac = function(a) {
    return this.e() ? a.e() ? 0 : -1 : a.N() || a.e() ? 1 : a === Qd ? -1 : 0;
  };
  h.jb = function(a) {
    if (a === Td || ta(this.sb.cc, a.toString()))
      return this;
    var b = this.sb,
        c = this.m;
    I(a !== Td, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    for (var d = [],
        e = !1,
        c = c.Wb(Nb),
        f = H(c); f; )
      e = e || a.Fc(f.S), d.push(f), f = H(c);
    d = e ? fe(d, td(a)) : Nd;
    e = a.toString();
    c = xa(b.cc);
    c[e] = a;
    a = xa(b.xd);
    a[e] = d;
    return new S(this.m, this.ba, new de(a, c));
  };
  h.Gc = function(a) {
    return a === Td || ta(this.sb.cc, a.toString());
  };
  h.Z = function(a) {
    if (a === this)
      return !0;
    if (a.N())
      return !1;
    if (this.A().Z(a.A()) && this.m.count() === a.m.count()) {
      var b = this.Wb(M);
      a = a.Wb(M);
      for (var c = H(b),
          d = H(a); c && d; ) {
        if (c.name !== d.name || !c.S.Z(d.S))
          return !1;
        c = H(b);
        d = H(a);
      }
      return null === c && null === d;
    }
    return !1;
  };
  function me(a, b) {
    return b === Td ? null : a.sb.get(b.toString());
  }
  h.toString = function() {
    return B(this.K(!0));
  };
  function L(a, b) {
    if (null === a)
      return C;
    var c = null;
    "object" === typeof a && ".priority" in a ? c = a[".priority"] : "undefined" !== typeof b && (c = b);
    I(null === c || "string" === typeof c || "number" === typeof c || "object" === typeof c && ".sv" in c, "Invalid priority type found: " + typeof c);
    "object" === typeof a && ".value" in a && null !== a[".value"] && (a = a[".value"]);
    if ("object" !== typeof a || ".sv" in a)
      return new qc(a, L(c));
    if (a instanceof Array) {
      var d = C,
          e = a;
      r(e, function(a, b) {
        if (v(e, b) && "." !== b.substring(0, 1)) {
          var c = L(a);
          if (c.N() || !c.e())
            d = d.Q(b, c);
        }
      });
      return d.da(L(c));
    }
    var f = [],
        g = !1,
        k = a;
    eb(k, function(a) {
      if ("string" !== typeof a || "." !== a.substring(0, 1)) {
        var b = L(k[a]);
        b.e() || (g = g || !b.A().e(), f.push(new E(a, b)));
      }
    });
    if (0 == f.length)
      return C;
    var l = fe(f, Ob, function(a) {
      return a.name;
    }, Qb);
    if (g) {
      var m = fe(f, td(M));
      return new S(l, L(c), new de({".priority": m}, {".priority": M}));
    }
    return new S(l, L(c), he);
  }
  var ne = Math.log(2);
  function oe(a) {
    this.count = parseInt(Math.log(a + 1) / ne, 10);
    this.cf = this.count - 1;
    this.Yf = a + 1 & parseInt(Array(this.count + 1).join("1"), 2);
  }
  function pe(a) {
    var b = !(a.Yf & 1 << a.cf);
    a.cf--;
    return b;
  }
  function fe(a, b, c, d) {
    function e(b, d) {
      var f = d - b;
      if (0 == f)
        return null;
      if (1 == f) {
        var m = a[b],
            t = c ? c(m) : m;
        return new cc(t, m.S, !1, null, null);
      }
      var m = parseInt(f / 2, 10) + b,
          f = e(b, m),
          x = e(m + 1, d),
          m = a[m],
          t = c ? c(m) : m;
      return new cc(t, m.S, !1, f, x);
    }
    a.sort(b);
    var f = function(b) {
      function d(b, g) {
        var k = t - b,
            x = t;
        t -= b;
        var x = e(k + 1, x),
            k = a[k],
            J = c ? c(k) : k,
            x = new cc(J, k.S, g, null, x);
        f ? f.left = x : m = x;
        f = x;
      }
      for (var f = null,
          m = null,
          t = a.length,
          x = 0; x < b.count; ++x) {
        var J = pe(b),
            sd = Math.pow(2, b.count - (x + 1));
        J ? d(sd, !1) : (d(sd, !1), d(sd, !0));
      }
      return m;
    }(new oe(a.length));
    return null !== f ? new Yb(d || b, f) : new Yb(d || b);
  }
  function je(a) {
    return "number" === typeof a ? "number:" + Xc(a) : "string:" + a;
  }
  function ie(a) {
    if (a.N()) {
      var b = a.K();
      I("string" === typeof b || "number" === typeof b || "object" === typeof b && v(b, ".sv"), "Priority must be a string or number.");
    } else
      I(a === Qd || a.e(), "priority of unexpected type.");
    I(a === Qd || a.A().e(), "Priority nodes can't have a priority of their own.");
  }
  var C = new S(new Yb(Qb), null, he);
  function qe() {
    S.call(this, new Yb(Qb), C, he);
  }
  ma(qe, S);
  h = qe.prototype;
  h.Ac = function(a) {
    return a === this ? 0 : 1;
  };
  h.Z = function(a) {
    return a === this;
  };
  h.A = function() {
    return this;
  };
  h.M = function() {
    return C;
  };
  h.e = function() {
    return !1;
  };
  var Qd = new qe,
      Od = new E("[MIN_NAME]", C),
      Vd = new E("[MAX_NAME]", Qd);
  function Gd(a, b) {
    this.D = a;
    this.Sd = b;
  }
  function Dd(a, b, c, d) {
    return new Gd(new pb(b, c, d), a.Sd);
  }
  function Hd(a) {
    return a.D.$ ? a.D.j() : null;
  }
  Gd.prototype.u = function() {
    return this.Sd;
  };
  function qb(a) {
    return a.Sd.$ ? a.Sd.j() : null;
  }
  ;
  function re(a, b) {
    this.V = a;
    var c = a.n,
        d = new jd(c.g),
        c = be(c) ? new jd(c.g) : c.ia ? new pd(c) : new kd(c);
    this.Af = new xd(c);
    var e = b.u(),
        f = b.D,
        g = d.ta(C, e.j(), null),
        k = c.ta(C, f.j(), null);
    this.Ja = new Gd(new pb(k, f.$, c.Fa()), new pb(g, e.$, d.Fa()));
    this.Ya = [];
    this.fg = new bd(a);
  }
  function se(a) {
    return a.V;
  }
  h = re.prototype;
  h.u = function() {
    return this.Ja.u().j();
  };
  h.eb = function(a) {
    var b = qb(this.Ja);
    return b && (be(this.V.n) || !a.e() && !b.M(O(a)).e()) ? b.oa(a) : null;
  };
  h.e = function() {
    return 0 === this.Ya.length;
  };
  h.Lb = function(a) {
    this.Ya.push(a);
  };
  h.hb = function(a, b) {
    var c = [];
    if (b) {
      I(null == a, "A cancel should cancel all event registrations.");
      var d = this.V.path;
      Oa(this.Ya, function(a) {
        (a = a.af(b, d)) && c.push(a);
      });
    }
    if (a) {
      for (var e = [],
          f = 0; f < this.Ya.length; ++f) {
        var g = this.Ya[f];
        if (!g.matches(a))
          e.push(g);
        else if (a.mf()) {
          e = e.concat(this.Ya.slice(f + 1));
          break;
        }
      }
      this.Ya = e;
    } else
      this.Ya = [];
    return c;
  };
  h.ab = function(a, b, c) {
    a.type === Ad && null !== a.source.Eb && (I(qb(this.Ja), "We should always have a full cache before handling merges"), I(Hd(this.Ja), "Missing event cache, even though we have a server cache"));
    var d = this.Ja;
    a = this.Af.ab(d, a, b, c);
    b = this.Af;
    c = a.ee;
    I(c.D.j().Gc(b.I.g), "Event snap not indexed");
    I(c.u().j().Gc(b.I.g), "Server snap not indexed");
    I(Eb(a.ee.u()) || !Eb(d.u()), "Once a server snap is complete, it should never go back");
    this.Ja = a.ee;
    return te(this, a.Zf, a.ee.D.j(), null);
  };
  function ue(a, b) {
    var c = a.Ja.D,
        d = [];
    c.j().N() || c.j().U(M, function(a, b) {
      d.push(new D("child_added", b, a));
    });
    c.$ && d.push(Ab(c.j()));
    return te(a, d, c.j(), b);
  }
  function te(a, b, c, d) {
    return cd(a.fg, b, c, d ? [d] : a.Ya);
  }
  ;
  function ve(a, b, c) {
    this.type = Ad;
    this.source = a;
    this.path = b;
    this.children = c;
  }
  ve.prototype.Vc = function(a) {
    if (this.path.e())
      return a = this.children.subtree(new K(a)), a.e() ? null : a.value ? new Rb(this.source, F, a.value) : new ve(this.source, F, a);
    I(O(this.path) === a, "Can't get a merge for a child not on the path of the operation");
    return new ve(this.source, G(this.path), this.children);
  };
  ve.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
  };
  var Sb = 0,
      Ad = 1,
      Ub = 2,
      Xb = 3;
  function we(a, b, c, d) {
    this.se = a;
    this.hf = b;
    this.Eb = c;
    this.We = d;
    I(!d || b, "Tagged queries must be from server.");
  }
  var Vb = new we(!0, !1, null, !1),
      xe = new we(!1, !0, null, !1);
  we.prototype.toString = function() {
    return this.se ? "user" : this.We ? "server(queryID=" + this.Eb + ")" : "server";
  };
  function ye(a, b) {
    this.f = Mc("p:rest:");
    this.H = a;
    this.Cb = b;
    this.Ea = null;
    this.aa = {};
  }
  function ze(a, b) {
    if (n(b))
      return "tag$" + b;
    var c = a.n;
    I(be(c) && c.g == M, "should have a tag if it's not a default query.");
    return a.path.toString();
  }
  h = ye.prototype;
  h.pf = function(a, b, c, d) {
    var e = a.path.toString();
    this.f("Listen called for " + e + " " + a.wa());
    var f = ze(a, c),
        g = {};
    this.aa[f] = g;
    a = ce(a.n);
    var k = this;
    Ae(this, e + ".json", a, function(a, b) {
      var t = b;
      404 === a && (a = t = null);
      null === a && k.Cb(e, t, !1, c);
      w(k.aa, f) === g && d(a ? 401 == a ? "permission_denied" : "rest_error:" + a : "ok", null);
    });
  };
  h.Kf = function(a, b) {
    var c = ze(a, b);
    delete this.aa[c];
  };
  h.P = function(a, b) {
    this.Ea = a;
    var c = Zc(a),
        d = c.data,
        c = c.zc && c.zc.exp;
    b && b("ok", {
      auth: d,
      expires: c
    });
  };
  h.ce = function(a) {
    this.Ea = null;
    a("ok", null);
  };
  h.Ie = function() {};
  h.wf = function() {};
  h.Gd = function() {};
  h.put = function() {};
  h.qf = function() {};
  h.Bf = function() {};
  function Ae(a, b, c, d) {
    c = c || {};
    c.format = "export";
    a.Ea && (c.auth = a.Ea);
    var e = (a.H.ib ? "https://" : "http://") + a.H.host + b + "?" + gb(c);
    a.f("Sending REST request for " + e);
    var f = new XMLHttpRequest;
    f.onreadystatechange = function() {
      if (d && 4 === f.readyState) {
        a.f("REST Response for " + e + " received. status:", f.status, "response:", f.responseText);
        var b = null;
        if (200 <= f.status && 300 > f.status) {
          try {
            b = jb(f.responseText);
          } catch (c) {
            P("Failed to parse JSON response for " + e + ": " + f.responseText);
          }
          d(null, b);
        } else
          401 !== f.status && 404 !== f.status && P("Got unsuccessful REST response for " + e + " Status: " + f.status), d(f.status);
        d = null;
      }
    };
    f.open("GET", e, !0);
    f.send();
  }
  ;
  function Be(a, b) {
    this.value = a;
    this.children = b || Ce;
  }
  var Ce = new Yb(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  function De(a) {
    var b = Ld;
    r(a, function(a, d) {
      b = b.set(new K(d), a);
    });
    return b;
  }
  h = Be.prototype;
  h.e = function() {
    return null === this.value && this.children.e();
  };
  function Ee(a, b, c) {
    if (null != a.value && c(a.value))
      return {
        path: F,
        value: a.value
      };
    if (b.e())
      return null;
    var d = O(b);
    a = a.children.get(d);
    return null !== a ? (b = Ee(a, G(b), c), null != b ? {
      path: (new K(d)).w(b.path),
      value: b.value
    } : null) : null;
  }
  function Fe(a, b) {
    return Ee(a, b, function() {
      return !0;
    });
  }
  h.subtree = function(a) {
    if (a.e())
      return this;
    var b = this.children.get(O(a));
    return null !== b ? b.subtree(G(a)) : Ld;
  };
  h.set = function(a, b) {
    if (a.e())
      return new Be(b, this.children);
    var c = O(a),
        d = (this.children.get(c) || Ld).set(G(a), b),
        c = this.children.Ma(c, d);
    return new Be(this.value, c);
  };
  h.remove = function(a) {
    if (a.e())
      return this.children.e() ? Ld : new Be(null, this.children);
    var b = O(a),
        c = this.children.get(b);
    return c ? (a = c.remove(G(a)), b = a.e() ? this.children.remove(b) : this.children.Ma(b, a), null === this.value && b.e() ? Ld : new Be(this.value, b)) : this;
  };
  h.get = function(a) {
    if (a.e())
      return this.value;
    var b = this.children.get(O(a));
    return b ? b.get(G(a)) : null;
  };
  function Kd(a, b, c) {
    if (b.e())
      return c;
    var d = O(b);
    b = Kd(a.children.get(d) || Ld, G(b), c);
    d = b.e() ? a.children.remove(d) : a.children.Ma(d, b);
    return new Be(a.value, d);
  }
  function Ge(a, b) {
    return He(a, F, b);
  }
  function He(a, b, c) {
    var d = {};
    a.children.ha(function(a, f) {
      d[a] = He(f, b.w(a), c);
    });
    return c(b, a.value, d);
  }
  function Ie(a, b, c) {
    return Je(a, b, F, c);
  }
  function Je(a, b, c, d) {
    var e = a.value ? d(c, a.value) : !1;
    if (e)
      return e;
    if (b.e())
      return null;
    e = O(b);
    return (a = a.children.get(e)) ? Je(a, G(b), c.w(e), d) : null;
  }
  function Ke(a, b, c) {
    var d = F;
    if (!b.e()) {
      var e = !0;
      a.value && (e = c(d, a.value));
      !0 === e && (e = O(b), (a = a.children.get(e)) && Le(a, G(b), d.w(e), c));
    }
  }
  function Le(a, b, c, d) {
    if (b.e())
      return a;
    a.value && d(c, a.value);
    var e = O(b);
    return (a = a.children.get(e)) ? Le(a, G(b), c.w(e), d) : Ld;
  }
  function Id(a, b) {
    Me(a, F, b);
  }
  function Me(a, b, c) {
    a.children.ha(function(a, e) {
      Me(e, b.w(a), c);
    });
    a.value && c(b, a.value);
  }
  function Ne(a, b) {
    a.children.ha(function(a, d) {
      d.value && b(a, d.value);
    });
  }
  var Ld = new Be(null);
  Be.prototype.toString = function() {
    var a = {};
    Id(this, function(b, c) {
      a[b.toString()] = c.toString();
    });
    return B(a);
  };
  function Oe(a) {
    this.W = a;
  }
  var Pe = new Oe(new Be(null));
  function Qe(a, b, c) {
    if (b.e())
      return new Oe(new Be(c));
    var d = Fe(a.W, b);
    if (null != d) {
      var e = d.path,
          d = d.value;
      b = N(e, b);
      d = d.G(b, c);
      return new Oe(a.W.set(e, d));
    }
    a = Kd(a.W, b, new Be(c));
    return new Oe(a);
  }
  function Re(a, b, c) {
    var d = a;
    eb(c, function(a, c) {
      d = Qe(d, b.w(a), c);
    });
    return d;
  }
  Oe.prototype.Od = function(a) {
    if (a.e())
      return Pe;
    a = Kd(this.W, a, Ld);
    return new Oe(a);
  };
  function Se(a, b) {
    var c = Fe(a.W, b);
    return null != c ? a.W.get(c.path).oa(N(c.path, b)) : null;
  }
  function Te(a) {
    var b = [],
        c = a.W.value;
    null != c ? c.N() || c.U(M, function(a, c) {
      b.push(new E(a, c));
    }) : a.W.children.ha(function(a, c) {
      null != c.value && b.push(new E(a, c.value));
    });
    return b;
  }
  function Ue(a, b) {
    if (b.e())
      return a;
    var c = Se(a, b);
    return null != c ? new Oe(new Be(c)) : new Oe(a.W.subtree(b));
  }
  Oe.prototype.e = function() {
    return this.W.e();
  };
  Oe.prototype.apply = function(a) {
    return Ve(F, this.W, a);
  };
  function Ve(a, b, c) {
    if (null != b.value)
      return c.G(a, b.value);
    var d = null;
    b.children.ha(function(b, f) {
      ".priority" === b ? (I(null !== f.value, "Priority writes must always be leaf nodes"), d = f.value) : c = Ve(a.w(b), f, c);
    });
    c.oa(a).e() || null === d || (c = c.G(a.w(".priority"), d));
    return c;
  }
  ;
  function We() {
    this.T = Pe;
    this.za = [];
    this.Jc = -1;
  }
  h = We.prototype;
  h.Od = function(a) {
    var b = Ua(this.za, function(b) {
      return b.fe === a;
    });
    I(0 <= b, "removeWrite called with nonexistent writeId.");
    var c = this.za[b];
    this.za.splice(b, 1);
    for (var d = c.visible,
        e = !1,
        f = this.za.length - 1; d && 0 <= f; ) {
      var g = this.za[f];
      g.visible && (f >= b && Xe(g, c.path) ? d = !1 : c.path.contains(g.path) && (e = !0));
      f--;
    }
    if (d) {
      if (e)
        this.T = Ye(this.za, Ze, F), this.Jc = 0 < this.za.length ? this.za[this.za.length - 1].fe : -1;
      else if (c.Ha)
        this.T = this.T.Od(c.path);
      else {
        var k = this;
        r(c.children, function(a, b) {
          k.T = k.T.Od(c.path.w(b));
        });
      }
      return c.path;
    }
    return null;
  };
  h.ua = function(a, b, c, d) {
    if (c || d) {
      var e = Ue(this.T, a);
      return !d && e.e() ? b : d || null != b || null != Se(e, F) ? (e = Ye(this.za, function(b) {
        return (b.visible || d) && (!c || !(0 <= Na(c, b.fe))) && (b.path.contains(a) || a.contains(b.path));
      }, a), b = b || C, e.apply(b)) : null;
    }
    e = Se(this.T, a);
    if (null != e)
      return e;
    e = Ue(this.T, a);
    return e.e() ? b : null != b || null != Se(e, F) ? (b = b || C, e.apply(b)) : null;
  };
  h.wc = function(a, b) {
    var c = C,
        d = Se(this.T, a);
    if (d)
      d.N() || d.U(M, function(a, b) {
        c = c.Q(a, b);
      });
    else if (b) {
      var e = Ue(this.T, a);
      b.U(M, function(a, b) {
        var d = Ue(e, new K(a)).apply(b);
        c = c.Q(a, d);
      });
      Oa(Te(e), function(a) {
        c = c.Q(a.name, a.S);
      });
    } else
      e = Ue(this.T, a), Oa(Te(e), function(a) {
        c = c.Q(a.name, a.S);
      });
    return c;
  };
  h.gd = function(a, b, c, d) {
    I(c || d, "Either existingEventSnap or existingServerSnap must exist");
    a = a.w(b);
    if (null != Se(this.T, a))
      return null;
    a = Ue(this.T, a);
    return a.e() ? d.oa(b) : a.apply(d.oa(b));
  };
  h.Wa = function(a, b, c) {
    a = a.w(b);
    var d = Se(this.T, a);
    return null != d ? d : ob(c, b) ? Ue(this.T, a).apply(c.j().M(b)) : null;
  };
  h.rc = function(a) {
    return Se(this.T, a);
  };
  h.je = function(a, b, c, d, e, f) {
    var g;
    a = Ue(this.T, a);
    g = Se(a, F);
    if (null == g)
      if (null != b)
        g = a.apply(b);
      else
        return [];
    g = g.jb(f);
    if (g.e() || g.N())
      return [];
    b = [];
    a = td(f);
    e = e ? g.Zb(c, f) : g.Xb(c, f);
    for (f = H(e); f && b.length < d; )
      0 !== a(f, c) && b.push(f), f = H(e);
    return b;
  };
  function Xe(a, b) {
    return a.Ha ? a.path.contains(b) : !!ua(a.children, function(c, d) {
      return a.path.w(d).contains(b);
    });
  }
  function Ze(a) {
    return a.visible;
  }
  function Ye(a, b, c) {
    for (var d = Pe,
        e = 0; e < a.length; ++e) {
      var f = a[e];
      if (b(f)) {
        var g = f.path;
        if (f.Ha)
          c.contains(g) ? (g = N(c, g), d = Qe(d, g, f.Ha)) : g.contains(c) && (g = N(g, c), d = Qe(d, F, f.Ha.oa(g)));
        else if (f.children)
          if (c.contains(g))
            g = N(c, g), d = Re(d, g, f.children);
          else {
            if (g.contains(c))
              if (g = N(g, c), g.e())
                d = Re(d, F, f.children);
              else if (f = w(f.children, O(g)))
                f = f.oa(G(g)), d = Qe(d, F, f);
          }
        else
          throw Fc("WriteRecord should have .snap or .children");
      }
    }
    return d;
  }
  function $e(a, b) {
    this.Jb = a;
    this.W = b;
  }
  h = $e.prototype;
  h.ua = function(a, b, c) {
    return this.W.ua(this.Jb, a, b, c);
  };
  h.wc = function(a) {
    return this.W.wc(this.Jb, a);
  };
  h.gd = function(a, b, c) {
    return this.W.gd(this.Jb, a, b, c);
  };
  h.rc = function(a) {
    return this.W.rc(this.Jb.w(a));
  };
  h.je = function(a, b, c, d, e) {
    return this.W.je(this.Jb, a, b, c, d, e);
  };
  h.Wa = function(a, b) {
    return this.W.Wa(this.Jb, a, b);
  };
  h.w = function(a) {
    return new $e(this.Jb.w(a), this.W);
  };
  function af() {
    this.ya = {};
  }
  h = af.prototype;
  h.e = function() {
    return wa(this.ya);
  };
  h.ab = function(a, b, c) {
    var d = a.source.Eb;
    if (null !== d)
      return d = w(this.ya, d), I(null != d, "SyncTree gave us an op for an invalid query."), d.ab(a, b, c);
    var e = [];
    r(this.ya, function(d) {
      e = e.concat(d.ab(a, b, c));
    });
    return e;
  };
  h.Lb = function(a, b, c, d, e) {
    var f = a.wa(),
        g = w(this.ya, f);
    if (!g) {
      var g = c.ua(e ? d : null),
          k = !1;
      g ? k = !0 : (g = d instanceof S ? c.wc(d) : C, k = !1);
      g = new re(a, new Gd(new pb(g, k, !1), new pb(d, e, !1)));
      this.ya[f] = g;
    }
    g.Lb(b);
    return ue(g, b);
  };
  h.hb = function(a, b, c) {
    var d = a.wa(),
        e = [],
        f = [],
        g = null != bf(this);
    if ("default" === d) {
      var k = this;
      r(this.ya, function(a, d) {
        f = f.concat(a.hb(b, c));
        a.e() && (delete k.ya[d], be(a.V.n) || e.push(a.V));
      });
    } else {
      var l = w(this.ya, d);
      l && (f = f.concat(l.hb(b, c)), l.e() && (delete this.ya[d], be(l.V.n) || e.push(l.V)));
    }
    g && null == bf(this) && e.push(new T(a.k, a.path));
    return {
      Eg: e,
      gg: f
    };
  };
  function cf(a) {
    return Pa(ra(a.ya), function(a) {
      return !be(a.V.n);
    });
  }
  h.eb = function(a) {
    var b = null;
    r(this.ya, function(c) {
      b = b || c.eb(a);
    });
    return b;
  };
  function df(a, b) {
    if (be(b.n))
      return bf(a);
    var c = b.wa();
    return w(a.ya, c);
  }
  function bf(a) {
    return va(a.ya, function(a) {
      return be(a.V.n);
    }) || null;
  }
  ;
  function ef(a) {
    this.sa = Ld;
    this.Db = new We;
    this.Ve = {};
    this.jc = {};
    this.Kc = a;
  }
  function ff(a, b, c, d, e) {
    var f = a.Db,
        g = e;
    I(d > f.Jc, "Stacking an older write on top of newer ones");
    n(g) || (g = !0);
    f.za.push({
      path: b,
      Ha: c,
      fe: d,
      visible: g
    });
    g && (f.T = Qe(f.T, b, c));
    f.Jc = d;
    return e ? gf(a, new Rb(Vb, b, c)) : [];
  }
  function hf(a, b, c, d) {
    var e = a.Db;
    I(d > e.Jc, "Stacking an older merge on top of newer ones");
    e.za.push({
      path: b,
      children: c,
      fe: d,
      visible: !0
    });
    e.T = Re(e.T, b, c);
    e.Jc = d;
    c = De(c);
    return gf(a, new ve(Vb, b, c));
  }
  function jf(a, b, c) {
    c = c || !1;
    b = a.Db.Od(b);
    return null == b ? [] : gf(a, new Tb(b, c));
  }
  function kf(a, b, c) {
    c = De(c);
    return gf(a, new ve(xe, b, c));
  }
  function lf(a, b, c, d) {
    d = mf(a, d);
    if (null != d) {
      var e = nf(d);
      d = e.path;
      e = e.Eb;
      b = N(d, b);
      c = new Rb(new we(!1, !0, e, !0), b, c);
      return of(a, d, c);
    }
    return [];
  }
  function pf(a, b, c, d) {
    if (d = mf(a, d)) {
      var e = nf(d);
      d = e.path;
      e = e.Eb;
      b = N(d, b);
      c = De(c);
      c = new ve(new we(!1, !0, e, !0), b, c);
      return of(a, d, c);
    }
    return [];
  }
  ef.prototype.Lb = function(a, b) {
    var c = a.path,
        d = null,
        e = !1;
    Ke(this.sa, c, function(a, b) {
      var f = N(a, c);
      d = b.eb(f);
      e = e || null != bf(b);
      return !d;
    });
    var f = this.sa.get(c);
    f ? (e = e || null != bf(f), d = d || f.eb(F)) : (f = new af, this.sa = this.sa.set(c, f));
    var g;
    null != d ? g = !0 : (g = !1, d = C, Ne(this.sa.subtree(c), function(a, b) {
      var c = b.eb(F);
      c && (d = d.Q(a, c));
    }));
    var k = null != df(f, a);
    if (!k && !be(a.n)) {
      var l = qf(a);
      I(!(l in this.jc), "View does not exist, but we have a tag");
      var m = rf++;
      this.jc[l] = m;
      this.Ve["_" + m] = l;
    }
    g = f.Lb(a, b, new $e(c, this.Db), d, g);
    k || e || (f = df(f, a), g = g.concat(sf(this, a, f)));
    return g;
  };
  ef.prototype.hb = function(a, b, c) {
    var d = a.path,
        e = this.sa.get(d),
        f = [];
    if (e && ("default" === a.wa() || null != df(e, a))) {
      f = e.hb(a, b, c);
      e.e() && (this.sa = this.sa.remove(d));
      e = f.Eg;
      f = f.gg;
      b = -1 !== Ua(e, function(a) {
        return be(a.n);
      });
      var g = Ie(this.sa, d, function(a, b) {
        return null != bf(b);
      });
      if (b && !g && (d = this.sa.subtree(d), !d.e()))
        for (var d = tf(d),
            k = 0; k < d.length; ++k) {
          var l = d[k],
              m = l.V,
              l = uf(this, l);
          this.Kc.Se(m, vf(this, m), l.td, l.J);
        }
      if (!g && 0 < e.length && !c)
        if (b)
          this.Kc.Xd(a, null);
        else {
          var t = this;
          Oa(e, function(a) {
            a.wa();
            var b = t.jc[qf(a)];
            t.Kc.Xd(a, b);
          });
        }
      wf(this, e);
    }
    return f;
  };
  ef.prototype.ua = function(a, b) {
    var c = this.Db,
        d = Ie(this.sa, a, function(b, c) {
          var d = N(b, a);
          if (d = c.eb(d))
            return d;
        });
    return c.ua(a, d, b, !0);
  };
  function tf(a) {
    return Ge(a, function(a, c, d) {
      if (c && null != bf(c))
        return [bf(c)];
      var e = [];
      c && (e = cf(c));
      r(d, function(a) {
        e = e.concat(a);
      });
      return e;
    });
  }
  function wf(a, b) {
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (!be(d.n)) {
        var d = qf(d),
            e = a.jc[d];
        delete a.jc[d];
        delete a.Ve["_" + e];
      }
    }
  }
  function sf(a, b, c) {
    var d = b.path,
        e = vf(a, b);
    c = uf(a, c);
    b = a.Kc.Se(b, e, c.td, c.J);
    d = a.sa.subtree(d);
    if (e)
      I(null == bf(d.value), "If we're adding a query, it shouldn't be shadowed");
    else
      for (e = Ge(d, function(a, b, c) {
        if (!a.e() && b && null != bf(b))
          return [se(bf(b))];
        var d = [];
        b && (d = d.concat(Qa(cf(b), function(a) {
          return a.V;
        })));
        r(c, function(a) {
          d = d.concat(a);
        });
        return d;
      }), d = 0; d < e.length; ++d)
        c = e[d], a.Kc.Xd(c, vf(a, c));
    return b;
  }
  function uf(a, b) {
    var c = b.V,
        d = vf(a, c);
    return {
      td: function() {
        return (b.u() || C).hash();
      },
      J: function(b) {
        if ("ok" === b) {
          if (d) {
            var f = c.path;
            if (b = mf(a, d)) {
              var g = nf(b);
              b = g.path;
              g = g.Eb;
              f = N(b, f);
              f = new Wb(new we(!1, !0, g, !0), f);
              b = of(a, b, f);
            } else
              b = [];
          } else
            b = gf(a, new Wb(xe, c.path));
          return b;
        }
        f = "Unknown Error";
        "too_big" === b ? f = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == b ? f = "Client doesn't have permission to access the desired data." : "unavailable" == b && (f = "The service is unavailable");
        f = Error(b + ": " + f);
        f.code = b.toUpperCase();
        return a.hb(c, null, f);
      }
    };
  }
  function qf(a) {
    return a.path.toString() + "$" + a.wa();
  }
  function nf(a) {
    var b = a.indexOf("$");
    I(-1 !== b && b < a.length - 1, "Bad queryKey.");
    return {
      Eb: a.substr(b + 1),
      path: new K(a.substr(0, b))
    };
  }
  function mf(a, b) {
    var c = a.Ve,
        d = "_" + b;
    return d in c ? c[d] : void 0;
  }
  function vf(a, b) {
    var c = qf(b);
    return w(a.jc, c);
  }
  var rf = 1;
  function of(a, b, c) {
    var d = a.sa.get(b);
    I(d, "Missing sync point for query tag that we're tracking");
    return d.ab(c, new $e(b, a.Db), null);
  }
  function gf(a, b) {
    return xf(a, b, a.sa, null, new $e(F, a.Db));
  }
  function xf(a, b, c, d, e) {
    if (b.path.e())
      return yf(a, b, c, d, e);
    var f = c.get(F);
    null == d && null != f && (d = f.eb(F));
    var g = [],
        k = O(b.path),
        l = b.Vc(k);
    if ((c = c.children.get(k)) && l)
      var m = d ? d.M(k) : null,
          k = e.w(k),
          g = g.concat(xf(a, l, c, m, k));
    f && (g = g.concat(f.ab(b, e, d)));
    return g;
  }
  function yf(a, b, c, d, e) {
    var f = c.get(F);
    null == d && null != f && (d = f.eb(F));
    var g = [];
    c.children.ha(function(c, f) {
      var m = d ? d.M(c) : null,
          t = e.w(c),
          x = b.Vc(c);
      x && (g = g.concat(yf(a, x, f, m, t)));
    });
    f && (g = g.concat(f.ab(b, e, d)));
    return g;
  }
  ;
  function zf() {
    this.children = {};
    this.jd = 0;
    this.value = null;
  }
  function Af(a, b, c) {
    this.Dd = a ? a : "";
    this.Xc = b ? b : null;
    this.B = c ? c : new zf;
  }
  function Bf(a, b) {
    for (var c = b instanceof K ? b : new K(b),
        d = a,
        e; null !== (e = O(c)); )
      d = new Af(e, d, w(d.B.children, e) || new zf), c = G(c);
    return d;
  }
  h = Af.prototype;
  h.Ba = function() {
    return this.B.value;
  };
  function Cf(a, b) {
    I("undefined" !== typeof b, "Cannot set value to undefined");
    a.B.value = b;
    Df(a);
  }
  h.clear = function() {
    this.B.value = null;
    this.B.children = {};
    this.B.jd = 0;
    Df(this);
  };
  h.sd = function() {
    return 0 < this.B.jd;
  };
  h.e = function() {
    return null === this.Ba() && !this.sd();
  };
  h.U = function(a) {
    var b = this;
    r(this.B.children, function(c, d) {
      a(new Af(d, b, c));
    });
  };
  function Ef(a, b, c, d) {
    c && !d && b(a);
    a.U(function(a) {
      Ef(a, b, !0, d);
    });
    c && d && b(a);
  }
  function Ff(a, b) {
    for (var c = a.parent(); null !== c && !b(c); )
      c = c.parent();
  }
  h.path = function() {
    return new K(null === this.Xc ? this.Dd : this.Xc.path() + "/" + this.Dd);
  };
  h.name = function() {
    return this.Dd;
  };
  h.parent = function() {
    return this.Xc;
  };
  function Df(a) {
    if (null !== a.Xc) {
      var b = a.Xc,
          c = a.Dd,
          d = a.e(),
          e = v(b.B.children, c);
      d && e ? (delete b.B.children[c], b.B.jd--, Df(b)) : d || e || (b.B.children[c] = a.B, b.B.jd++, Df(b));
    }
  }
  ;
  function Gf(a) {
    I(ea(a) && 0 < a.length, "Requires a non-empty array");
    this.Qf = a;
    this.Lc = {};
  }
  Gf.prototype.be = function(a, b) {
    for (var c = this.Lc[a] || [],
        d = 0; d < c.length; d++)
      c[d].xc.apply(c[d].La, Array.prototype.slice.call(arguments, 1));
  };
  Gf.prototype.Ab = function(a, b, c) {
    Hf(this, a);
    this.Lc[a] = this.Lc[a] || [];
    this.Lc[a].push({
      xc: b,
      La: c
    });
    (a = this.we(a)) && b.apply(c, a);
  };
  Gf.prototype.fc = function(a, b, c) {
    Hf(this, a);
    a = this.Lc[a] || [];
    for (var d = 0; d < a.length; d++)
      if (a[d].xc === b && (!c || c === a[d].La)) {
        a.splice(d, 1);
        break;
      }
  };
  function Hf(a, b) {
    I(Ta(a.Qf, function(a) {
      return a === b;
    }), "Unknown event: " + b);
  }
  ;
  var If = function() {
    var a = 0,
        b = [];
    return function(c) {
      var d = c === a;
      a = c;
      for (var e = Array(8),
          f = 7; 0 <= f; f--)
        e[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64), c = Math.floor(c / 64);
      I(0 === c, "Cannot push at time == 0");
      c = e.join("");
      if (d) {
        for (f = 11; 0 <= f && 63 === b[f]; f--)
          b[f] = 0;
        b[f]++;
      } else
        for (f = 0; 12 > f; f++)
          b[f] = Math.floor(64 * Math.random());
      for (f = 0; 12 > f; f++)
        c += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
      I(20 === c.length, "nextPushId: Length should be 20.");
      return c;
    };
  }();
  function Jf() {
    Gf.call(this, ["online"]);
    this.Uc = !0;
    if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener) {
      var a = this;
      window.addEventListener("online", function() {
        a.Uc || a.be("online", !0);
        a.Uc = !0;
      }, !1);
      window.addEventListener("offline", function() {
        a.Uc && a.be("online", !1);
        a.Uc = !1;
      }, !1);
    }
  }
  ma(Jf, Gf);
  Jf.prototype.we = function(a) {
    I("online" === a, "Unknown event type: " + a);
    return [this.Uc];
  };
  ca(Jf);
  function Kf() {
    Gf.call(this, ["visible"]);
    var a,
        b;
    "undefined" !== typeof document && "undefined" !== typeof document.addEventListener && ("undefined" !== typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" !== typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" !== typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" !== typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden"));
    this.tc = !0;
    if (b) {
      var c = this;
      document.addEventListener(b, function() {
        var b = !document[a];
        b !== c.tc && (c.tc = b, c.be("visible", b));
      }, !1);
    }
  }
  ma(Kf, Gf);
  Kf.prototype.we = function(a) {
    I("visible" === a, "Unknown event type: " + a);
    return [this.tc];
  };
  ca(Kf);
  var Lf = /[\[\].#$\/\u0000-\u001F\u007F]/,
      Mf = /[\[\].#$\u0000-\u001F\u007F]/;
  function Nf(a) {
    return p(a) && 0 !== a.length && !Lf.test(a);
  }
  function Of(a) {
    return null === a || p(a) || ga(a) && !Qc(a) || ia(a) && v(a, ".sv");
  }
  function Pf(a, b, c, d) {
    d && !n(b) || Qf(z(a, 1, d), b, c);
  }
  function Qf(a, b, c) {
    c instanceof K && (c = new tc(c, a));
    if (!n(b))
      throw Error(a + "contains undefined " + wc(c));
    if (ha(b))
      throw Error(a + "contains a function " + wc(c) + " with contents: " + b.toString());
    if (Qc(b))
      throw Error(a + "contains " + b.toString() + " " + wc(c));
    if (p(b) && b.length > 10485760 / 3 && 10485760 < uc(b))
      throw Error(a + "contains a string greater than 10485760 utf8 bytes " + wc(c) + " ('" + b.substring(0, 50) + "...')");
    if (ia(b)) {
      var d = !1,
          e = !1;
      eb(b, function(b, g) {
        if (".value" === b)
          d = !0;
        else if (".priority" !== b && ".sv" !== b && (e = !0, !Nf(b)))
          throw Error(a + " contains an invalid key (" + b + ") " + wc(c) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
        c.push(b);
        Qf(a, g, c);
        c.pop();
      });
      if (d && e)
        throw Error(a + ' contains ".value" child ' + wc(c) + " in addition to actual children.");
    }
  }
  function Rf(a, b, c) {
    if (!ia(b) || ea(b))
      throw Error(z(a, 1, !1) + " must be an Object containing the children to replace.");
    if (v(b, ".value"))
      throw Error(z(a, 1, !1) + ' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');
    Pf(a, b, c, !1);
  }
  function Sf(a, b, c) {
    if (Qc(c))
      throw Error(z(a, b, !1) + "is " + c.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
    if (!Of(c))
      throw Error(z(a, b, !1) + "must be a valid Firebase priority (a string, finite number, server value, or null).");
  }
  function Tf(a, b, c) {
    if (!c || n(b))
      switch (b) {
        case "value":
        case "child_added":
        case "child_removed":
        case "child_changed":
        case "child_moved":
          break;
        default:
          throw Error(z(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');
      }
  }
  function Uf(a, b, c, d) {
    if ((!d || n(c)) && !Nf(c))
      throw Error(z(a, b, d) + 'was an invalid key: "' + c + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
  }
  function Vf(a, b) {
    if (!p(b) || 0 === b.length || Mf.test(b))
      throw Error(z(a, 1, !1) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
  }
  function Wf(a, b) {
    if (".info" === O(b))
      throw Error(a + " failed: Can't modify data under /.info/");
  }
  function Xf(a, b) {
    if (!p(b))
      throw Error(z(a, 1, !1) + "must be a valid credential (a string).");
  }
  function Yf(a, b, c) {
    if (!p(c))
      throw Error(z(a, b, !1) + "must be a valid string.");
  }
  function Zf(a, b, c, d) {
    if (!d || n(c))
      if (!ia(c) || null === c)
        throw Error(z(a, b, d) + "must be a valid object.");
  }
  function $f(a, b, c) {
    if (!ia(b) || null === b || !v(b, c))
      throw Error(z(a, 1, !1) + 'must contain the key "' + c + '"');
    if (!p(w(b, c)))
      throw Error(z(a, 1, !1) + 'must contain the key "' + c + '" with type "string"');
  }
  ;
  function ag() {
    this.set = {};
  }
  h = ag.prototype;
  h.add = function(a, b) {
    this.set[a] = null !== b ? b : !0;
  };
  h.contains = function(a) {
    return v(this.set, a);
  };
  h.get = function(a) {
    return this.contains(a) ? this.set[a] : void 0;
  };
  h.remove = function(a) {
    delete this.set[a];
  };
  h.clear = function() {
    this.set = {};
  };
  h.e = function() {
    return wa(this.set);
  };
  h.count = function() {
    return pa(this.set);
  };
  function bg(a, b) {
    r(a.set, function(a, d) {
      b(d, a);
    });
  }
  h.keys = function() {
    var a = [];
    r(this.set, function(b, c) {
      a.push(c);
    });
    return a;
  };
  function nc() {
    this.m = this.C = null;
  }
  nc.prototype.find = function(a) {
    if (null != this.C)
      return this.C.oa(a);
    if (a.e() || null == this.m)
      return null;
    var b = O(a);
    a = G(a);
    return this.m.contains(b) ? this.m.get(b).find(a) : null;
  };
  nc.prototype.lc = function(a, b) {
    if (a.e())
      this.C = b, this.m = null;
    else if (null !== this.C)
      this.C = this.C.G(a, b);
    else {
      null == this.m && (this.m = new ag);
      var c = O(a);
      this.m.contains(c) || this.m.add(c, new nc);
      c = this.m.get(c);
      a = G(a);
      c.lc(a, b);
    }
  };
  function cg(a, b) {
    if (b.e())
      return a.C = null, a.m = null, !0;
    if (null !== a.C) {
      if (a.C.N())
        return !1;
      var c = a.C;
      a.C = null;
      c.U(M, function(b, c) {
        a.lc(new K(b), c);
      });
      return cg(a, b);
    }
    return null !== a.m ? (c = O(b), b = G(b), a.m.contains(c) && cg(a.m.get(c), b) && a.m.remove(c), a.m.e() ? (a.m = null, !0) : !1) : !0;
  }
  function oc(a, b, c) {
    null !== a.C ? c(b, a.C) : a.U(function(a, e) {
      var f = new K(b.toString() + "/" + a);
      oc(e, f, c);
    });
  }
  nc.prototype.U = function(a) {
    null !== this.m && bg(this.m, function(b, c) {
      a(b, c);
    });
  };
  var dg = "auth.firebase.com";
  function eg(a, b, c) {
    this.kd = a || {};
    this.ae = b || {};
    this.$a = c || {};
    this.kd.remember || (this.kd.remember = "default");
  }
  var fg = ["remember", "redirectTo"];
  function gg(a) {
    var b = {},
        c = {};
    eb(a || {}, function(a, e) {
      0 <= Na(fg, a) ? b[a] = e : c[a] = e;
    });
    return new eg(b, {}, c);
  }
  ;
  function hg(a, b) {
    this.Me = ["session", a.Ld, a.yb].join(":");
    this.Yd = b;
  }
  hg.prototype.set = function(a, b) {
    if (!b)
      if (this.Yd.length)
        b = this.Yd[0];
      else
        throw Error("fb.login.SessionManager : No storage options available!");
    b.set(this.Me, a);
  };
  hg.prototype.get = function() {
    var a = Qa(this.Yd, q(this.kg, this)),
        a = Pa(a, function(a) {
          return null !== a;
        });
    Wa(a, function(a, c) {
      return $c(c.token) - $c(a.token);
    });
    return 0 < a.length ? a.shift() : null;
  };
  hg.prototype.kg = function(a) {
    try {
      var b = a.get(this.Me);
      if (b && b.token)
        return b;
    } catch (c) {}
    return null;
  };
  hg.prototype.clear = function() {
    var a = this;
    Oa(this.Yd, function(b) {
      b.remove(a.Me);
    });
  };
  function ig() {
    var a = navigator.userAgent;
    if ("Microsoft Internet Explorer" === navigator.appName) {
      if ((a = a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)) && 1 < a.length)
        return 8 <= parseFloat(a[1]);
    } else if (-1 < a.indexOf("Trident") && (a = a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/)) && 1 < a.length)
      return 8 <= parseFloat(a[1]);
    return !1;
  }
  ;
  function jg() {
    var a = window.opener.frames,
        b;
    for (b = a.length - 1; 0 <= b; b--)
      try {
        if (a[b].location.protocol === window.location.protocol && a[b].location.host === window.location.host && "__winchan_relay_frame" === a[b].name)
          return a[b];
      } catch (c) {}
    return null;
  }
  function kg(a, b, c) {
    a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c, !1);
  }
  function lg(a, b, c) {
    a.detachEvent ? a.detachEvent("on" + b, c) : a.removeEventListener && a.removeEventListener(b, c, !1);
  }
  function mg(a) {
    /^https?:\/\//.test(a) || (a = window.location.href);
    var b = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);
    return b ? b[1] : a;
  }
  function ng(a) {
    var b = "";
    try {
      a = a.replace("#", "");
      var c = hb(a);
      c && v(c, "__firebase_request_key") && (b = w(c, "__firebase_request_key"));
    } catch (d) {}
    return b;
  }
  function og() {
    var a = Pc(dg);
    return a.scheme + "://" + a.host + "/v2";
  }
  function pg(a) {
    return og() + "/" + a + "/auth/channel";
  }
  ;
  function qg(a) {
    var b = this;
    this.yc = a;
    this.Zd = "*";
    ig() ? this.Oc = this.vd = jg() : (this.Oc = window.opener, this.vd = window);
    if (!b.Oc)
      throw "Unable to find relay frame";
    kg(this.vd, "message", q(this.gc, this));
    kg(this.vd, "message", q(this.uf, this));
    try {
      rg(this, {a: "ready"});
    } catch (c) {
      kg(this.Oc, "load", function() {
        rg(b, {a: "ready"});
      });
    }
    kg(window, "unload", q(this.ug, this));
  }
  function rg(a, b) {
    b = B(b);
    ig() ? a.Oc.doPost(b, a.Zd) : a.Oc.postMessage(b, a.Zd);
  }
  qg.prototype.gc = function(a) {
    var b = this,
        c;
    try {
      c = jb(a.data);
    } catch (d) {}
    c && "request" === c.a && (lg(window, "message", this.gc), this.Zd = a.origin, this.yc && setTimeout(function() {
      b.yc(b.Zd, c.d, function(a, c) {
        b.Xf = !c;
        b.yc = void 0;
        rg(b, {
          a: "response",
          d: a,
          forceKeepWindowOpen: c
        });
      });
    }, 0));
  };
  qg.prototype.ug = function() {
    try {
      lg(this.vd, "message", this.uf);
    } catch (a) {}
    this.yc && (rg(this, {
      a: "error",
      d: "unknown closed window"
    }), this.yc = void 0);
    try {
      window.close();
    } catch (b) {}
  };
  qg.prototype.uf = function(a) {
    if (this.Xf && "die" === a.data)
      try {
        window.close();
      } catch (b) {}
  };
  function sg(a) {
    this.nc = Ga() + Ga() + Ga();
    this.yf = a;
  }
  sg.prototype.open = function(a, b) {
    Bc.set("redirect_request_id", this.nc);
    Bc.set("redirect_request_id", this.nc);
    b.requestId = this.nc;
    b.redirectTo = b.redirectTo || window.location.href;
    a += (/\?/.test(a) ? "" : "?") + gb(b);
    window.location = a;
  };
  sg.isAvailable = function() {
    return !1;
  };
  sg.prototype.Nb = function() {
    return "redirect";
  };
  var tg = {
    NETWORK_ERROR: "Unable to contact the Firebase server.",
    SERVER_ERROR: "An unknown server error occurred.",
    TRANSPORT_UNAVAILABLE: "There are no login transports available for the requested method.",
    REQUEST_INTERRUPTED: "The browser redirected the page before the login request could complete.",
    USER_CANCELLED: "The user cancelled authentication."
  };
  function U(a) {
    var b = Error(w(tg, a), a);
    b.code = a;
    return b;
  }
  ;
  function ug(a) {
    if (!a.window_features || -1 !== navigator.userAgent.indexOf("Fennec/") || -1 !== navigator.userAgent.indexOf("Firefox/") && -1 !== navigator.userAgent.indexOf("Android"))
      a.window_features = void 0;
    a.window_name || (a.window_name = "_blank");
    this.options = a;
  }
  ug.prototype.open = function(a, b, c) {
    function d(a) {
      g && (document.body.removeChild(g), g = void 0);
      t && (t = clearInterval(t));
      lg(window, "message", e);
      lg(window, "unload", d);
      if (m && !a)
        try {
          m.close();
        } catch (b) {
          k.postMessage("die", l);
        }
      m = k = void 0;
    }
    function e(a) {
      if (a.origin === l)
        try {
          var b = jb(a.data);
          "ready" === b.a ? k.postMessage(x, l) : "error" === b.a ? (d(!1), c && (c(b.d), c = null)) : "response" === b.a && (d(b.forceKeepWindowOpen), c && (c(null, b.d), c = null));
        } catch (e) {}
    }
    var f = ig(),
        g,
        k;
    if (!this.options.relay_url)
      return c(Error("invalid arguments: origin of url and relay_url must match"));
    var l = mg(a);
    if (l !== mg(this.options.relay_url))
      c && setTimeout(function() {
        c(Error("invalid arguments: origin of url and relay_url must match"));
      }, 0);
    else {
      f && (g = document.createElement("iframe"), g.setAttribute("src", this.options.relay_url), g.style.display = "none", g.setAttribute("name", "__winchan_relay_frame"), document.body.appendChild(g), k = g.contentWindow);
      a += (/\?/.test(a) ? "" : "?") + gb(b);
      var m = window.open(a, this.options.window_name, this.options.window_features);
      k || (k = m);
      var t = setInterval(function() {
        m && m.closed && (d(!1), c && (c(U("USER_CANCELLED")), c = null));
      }, 500),
          x = B({
            a: "request",
            d: b
          });
      kg(window, "unload", d);
      kg(window, "message", e);
    }
  };
  ug.isAvailable = function() {
    return !1;
  };
  ug.prototype.Nb = function() {
    return "popup";
  };
  function vg(a) {
    a.method || (a.method = "GET");
    a.headers || (a.headers = {});
    a.headers.content_type || (a.headers.content_type = "application/json");
    a.headers.content_type = a.headers.content_type.toLowerCase();
    this.options = a;
  }
  vg.prototype.open = function(a, b, c) {
    var d = Pc(a),
        e = "http" === d.scheme ? require("http") : require("https");
    a = this.options.method;
    var f,
        g = {Accept: "application/json;text/plain"};
    za(g, this.options.headers);
    d = {
      host: d.host.split(":")[0],
      port: d.port,
      path: d.ic,
      method: this.options.method.toUpperCase()
    };
    if ("GET" === a)
      d.path += (/\?/.test(d.path) ? "" : "?") + gb(b), f = null;
    else {
      var k = this.options.headers.content_type;
      "application/json" === k && (f = B(b));
      "application/x-www-form-urlencoded" === k && (f = gb(b));
      g["Content-Length"] = Buffer.byteLength(f, "utf8");
    }
    d.headers = g;
    b = e.request(d, function(a) {
      var b = "";
      a.setEncoding("utf8");
      a.on("data", function(a) {
        b += a;
      });
      a.on("end", function() {
        try {
          b = jb(b + "");
        } catch (a) {}
        c && (c(null, b), c = null);
      });
    });
    "GET" !== a && b.write(f);
    b.on("error", function(a) {
      a && a.code && ("ENOTFOUND" === a.code || "ENETDOWN" === a.code) ? c(U("NETWORK_ERROR")) : c(U("SERVER_ERROR"));
      c = null;
    });
    b.end();
  };
  vg.isAvailable = function() {
    return !0;
  };
  vg.prototype.Nb = function() {
    return "json";
  };
  function wg(a) {
    a.method || (a.method = "GET");
    a.headers || (a.headers = {});
    a.headers.content_type || (a.headers.content_type = "application/json");
    a.headers.content_type = a.headers.content_type.toLowerCase();
    this.options = a;
  }
  wg.prototype.open = function(a, b, c) {
    function d() {
      c && (c(U("REQUEST_INTERRUPTED")), c = null);
    }
    var e = new XMLHttpRequest,
        f = this.options.method.toUpperCase(),
        g;
    kg(window, "beforeunload", d);
    e.onreadystatechange = function() {
      if (c && 4 === e.readyState) {
        var a;
        if (200 <= e.status && 300 > e.status) {
          try {
            a = jb(e.responseText);
          } catch (b) {}
          c(null, a);
        } else
          500 <= e.status && 600 > e.status ? c(U("SERVER_ERROR")) : c(U("NETWORK_ERROR"));
        c = null;
        lg(window, "beforeunload", d);
      }
    };
    if ("GET" === f)
      a += (/\?/.test(a) ? "" : "?") + gb(b), g = null;
    else {
      var k = this.options.headers.content_type;
      "application/json" === k && (g = B(b));
      "application/x-www-form-urlencoded" === k && (g = gb(b));
    }
    e.open(f, a, !0);
    a = {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json;text/plain"
    };
    za(a, this.options.headers);
    for (var l in a)
      e.setRequestHeader(l, a[l]);
    e.send(g);
  };
  wg.isAvailable = function() {
    return !1;
  };
  wg.prototype.Nb = function() {
    return "json";
  };
  function xg(a) {
    this.nc = Ga() + Ga() + Ga();
    this.yf = a;
  }
  xg.prototype.open = function(a, b, c) {
    function d() {
      c && (c(U("USER_CANCELLED")), c = null);
    }
    var e = this,
        f = Pc(dg),
        g;
    b.requestId = this.nc;
    b.redirectTo = f.scheme + "://" + f.host + "/blank/page.html";
    a += /\?/.test(a) ? "" : "?";
    a += gb(b);
    (g = window.open(a, "_blank", "location=no")) && ha(g.addEventListener) ? (g.addEventListener("loadstart", function(a) {
      var b;
      if (b = a && a.url)
        a: {
          try {
            var m = document.createElement("a");
            m.href = a.url;
            b = m.host === f.host && "/blank/page.html" === m.pathname;
            break a;
          } catch (t) {}
          b = !1;
        }
      b && (a = ng(a.url), g.removeEventListener("exit", d), g.close(), a = new eg(null, null, {
        requestId: e.nc,
        requestKey: a
      }), e.yf.requestWithCredential("/auth/session", a, c), c = null);
    }), g.addEventListener("exit", d)) : c(U("TRANSPORT_UNAVAILABLE"));
  };
  xg.isAvailable = function() {
    return !1;
  };
  xg.prototype.Nb = function() {
    return "redirect";
  };
  function yg(a) {
    a.callback_parameter || (a.callback_parameter = "callback");
    this.options = a;
    window.__firebase_auth_jsonp = window.__firebase_auth_jsonp || {};
  }
  yg.prototype.open = function(a, b, c) {
    function d() {
      c && (c(U("REQUEST_INTERRUPTED")), c = null);
    }
    function e() {
      setTimeout(function() {
        window.__firebase_auth_jsonp[f] = void 0;
        wa(window.__firebase_auth_jsonp) && (window.__firebase_auth_jsonp = void 0);
        try {
          var a = document.getElementById(f);
          a && a.parentNode.removeChild(a);
        } catch (b) {}
      }, 1);
      lg(window, "beforeunload", d);
    }
    var f = "fn" + (new Date).getTime() + Math.floor(99999 * Math.random());
    b[this.options.callback_parameter] = "__firebase_auth_jsonp." + f;
    a += (/\?/.test(a) ? "" : "?") + gb(b);
    kg(window, "beforeunload", d);
    window.__firebase_auth_jsonp[f] = function(a) {
      c && (c(null, a), c = null);
      e();
    };
    zg(f, a, c);
  };
  function zg(a, b, c) {
    setTimeout(function() {
      try {
        var d = document.createElement("script");
        d.type = "text/javascript";
        d.id = a;
        d.async = !0;
        d.src = b;
        d.onerror = function() {
          var b = document.getElementById(a);
          null !== b && b.parentNode.removeChild(b);
          c && c(U("NETWORK_ERROR"));
        };
        var e = document.getElementsByTagName("head");
        (e && 0 != e.length ? e[0] : document.documentElement).appendChild(d);
      } catch (f) {
        c && c(U("NETWORK_ERROR"));
      }
    }, 0);
  }
  yg.isAvailable = function() {
    return !1;
  };
  yg.prototype.Nb = function() {
    return "json";
  };
  function Ag(a, b, c, d) {
    Gf.call(this, ["auth_status"]);
    this.H = a;
    this.Ze = b;
    this.Pg = c;
    this.He = d;
    this.qc = new hg(a, [Ac, Bc]);
    this.kb = null;
    Bg(this);
  }
  ma(Ag, Gf);
  h = Ag.prototype;
  h.te = function() {
    return this.kb || null;
  };
  function Bg(a) {
    Bc.get("redirect_request_id") && Cg(a);
    var b = a.qc.get();
    b && b.token ? (Dg(a, b), a.Ze(b.token, function(c, d) {
      Eg(a, c, d, !1, b.token, b);
    }, function(b, d) {
      Fg(a, "resumeSession()", b, d);
    })) : Dg(a, null);
  }
  function Gg(a, b, c, d, e, f) {
    "firebaseio-demo.com" === a.H.domain && P("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");
    a.Ze(b, function(f, k) {
      Eg(a, f, k, !0, b, c, d || {}, e);
    }, function(b, c) {
      Fg(a, "auth()", b, c, f);
    });
  }
  function Hg(a, b) {
    a.qc.clear();
    Dg(a, null);
    a.Pg(function(a, d) {
      if ("ok" === a)
        Q(b, null);
      else {
        var e = (a || "error").toUpperCase(),
            f = e;
        d && (f += ": " + d);
        f = Error(f);
        f.code = e;
        Q(b, f);
      }
    });
  }
  function Eg(a, b, c, d, e, f, g, k) {
    "ok" === b ? (d && (b = c.auth, f.auth = b, f.expires = c.expires, f.token = ad(e) ? e : "", c = null, b && v(b, "uid") ? c = w(b, "uid") : v(f, "uid") && (c = w(f, "uid")), f.uid = c, c = "custom", b && v(b, "provider") ? c = w(b, "provider") : v(f, "provider") && (c = w(f, "provider")), f.provider = c, a.qc.clear(), ad(e) && (g = g || {}, c = Ac, "sessionOnly" === g.remember && (c = Bc), "none" !== g.remember && a.qc.set(f, c)), Dg(a, f)), Q(k, null, f)) : (a.qc.clear(), Dg(a, null), f = a = (b || "error").toUpperCase(), c && (f += ": " + c), f = Error(f), f.code = a, Q(k, f));
  }
  function Fg(a, b, c, d, e) {
    P(b + " was canceled: " + d);
    a.qc.clear();
    Dg(a, null);
    a = Error(d);
    a.code = c.toUpperCase();
    Q(e, a);
  }
  function Ig(a, b, c, d, e) {
    Jg(a);
    c = new eg(d || {}, {}, c || {});
    Kg(a, [vg], "/auth/" + b, c, e);
  }
  function Lg(a, b, c, d) {
    Jg(a);
    var e = [ug, xg];
    c = gg(c);
    "anonymous" === b || "password" === b ? setTimeout(function() {
      Q(d, U("TRANSPORT_UNAVAILABLE"));
    }, 0) : (c.ae.window_features = "menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top=" + ("object" === typeof screen ? .5 * (screen.height - 625) : 0) + ",left=" + ("object" === typeof screen ? .5 * (screen.width - 625) : 0), c.ae.relay_url = pg(a.H.yb), c.ae.requestWithCredential = q(a.oc, a), Kg(a, e, "/auth/" + b, c, d));
  }
  function Cg(a) {
    var b = Bc.get("redirect_request_id");
    if (b) {
      var c = Bc.get("redirect_client_options");
      Bc.remove("redirect_request_id");
      Bc.remove("redirect_client_options");
      var d = [wg, yg],
          b = {
            requestId: b,
            requestKey: ng(document.location.hash)
          },
          c = new eg(c, {}, b);
      try {
        document.location.hash = document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/, "");
      } catch (e) {}
      Kg(a, d, "/auth/session", c);
    }
  }
  h.oe = function(a, b) {
    Jg(this);
    var c = gg(a);
    c.$a._method = "POST";
    this.oc("/users", c, function(a, c) {
      a ? Q(b, a) : Q(b, a, c);
    });
  };
  h.Oe = function(a, b) {
    var c = this;
    Jg(this);
    var d = "/users/" + encodeURIComponent(a.email),
        e = gg(a);
    e.$a._method = "DELETE";
    this.oc(d, e, function(a, d) {
      !a && d && d.uid && c.kb && c.kb.uid && c.kb.uid === d.uid && Hg(c);
      Q(b, a);
    });
  };
  h.le = function(a, b) {
    Jg(this);
    var c = "/users/" + encodeURIComponent(a.email) + "/password",
        d = gg(a);
    d.$a._method = "PUT";
    d.$a.password = a.newPassword;
    this.oc(c, d, function(a) {
      Q(b, a);
    });
  };
  h.ke = function(a, b) {
    Jg(this);
    var c = "/users/" + encodeURIComponent(a.oldEmail) + "/email",
        d = gg(a);
    d.$a._method = "PUT";
    d.$a.email = a.newEmail;
    d.$a.password = a.password;
    this.oc(c, d, function(a) {
      Q(b, a);
    });
  };
  h.Pe = function(a, b) {
    Jg(this);
    var c = "/users/" + encodeURIComponent(a.email) + "/password",
        d = gg(a);
    d.$a._method = "POST";
    this.oc(c, d, function(a) {
      Q(b, a);
    });
  };
  h.oc = function(a, b, c) {
    Mg(this, [vg], a, b, c);
  };
  function Kg(a, b, c, d, e) {
    Mg(a, b, c, d, function(b, c) {
      !b && c && c.token && c.uid ? Gg(a, c.token, c, d.kd, function(a, b) {
        a ? Q(e, a) : Q(e, null, b);
      }) : Q(e, b || U("UNKNOWN_ERROR"));
    });
  }
  function Mg(a, b, c, d, e) {
    b = Pa(b, function(a) {
      return "function" === typeof a.isAvailable && a.isAvailable();
    });
    0 === b.length ? setTimeout(function() {
      Q(e, U("TRANSPORT_UNAVAILABLE"));
    }, 0) : (b = new (b.shift())(d.ae), d = fb(d.$a), d.v = "node-2.2.2", d.transport = b.Nb(), d.suppress_status_codes = !0, a = og() + "/" + a.H.yb + c, b.open(a, d, function(a, b) {
      if (a)
        Q(e, a);
      else if (b && b.error) {
        var c = Error(b.error.message);
        c.code = b.error.code;
        c.details = b.error.details;
        Q(e, c);
      } else
        Q(e, null, b);
    }));
  }
  function Dg(a, b) {
    var c = null !== a.kb || null !== b;
    a.kb = b;
    c && a.be("auth_status", b);
    a.He(null !== b);
  }
  h.we = function(a) {
    I("auth_status" === a, 'initial event must be of type "auth_status"');
    return [this.kb];
  };
  function Jg(a) {
    var b = a.H;
    if ("firebaseio.com" !== b.domain && "firebaseio-demo.com" !== b.domain && "auth.firebase.com" === dg)
      throw Error("This custom Firebase server ('" + a.H.domain + "') does not support delegated login.");
  }
  ;
  function Ng(a) {
    this.gc = a;
    this.Kd = [];
    this.Pb = 0;
    this.me = -1;
    this.Bb = null;
  }
  function Og(a, b, c) {
    a.me = b;
    a.Bb = c;
    a.me < a.Pb && (a.Bb(), a.Bb = null);
  }
  function Pg(a, b, c) {
    for (a.Kd[b] = c; a.Kd[a.Pb]; ) {
      var d = a.Kd[a.Pb];
      delete a.Kd[a.Pb];
      for (var e = 0; e < d.length; ++e)
        if (d[e]) {
          var f = a;
          zb(function() {
            f.gc(d[e]);
          });
        }
      if (a.Pb === a.me) {
        a.Bb && (clearTimeout(a.Bb), a.Bb(), a.Bb = null);
        break;
      }
      a.Pb++;
    }
  }
  ;
  function Qg(a, b, c) {
    this.ne = a;
    this.f = Mc(a);
    this.lb = this.mb = 0;
    this.Ua = Lb(b);
    this.Td = c;
    this.Ec = !1;
    this.fd = function(a) {
      b.host !== b.Na && (a.ns = b.yb);
      var c = [],
          f;
      for (f in a)
        a.hasOwnProperty(f) && c.push(f + "=" + a[f]);
      return (b.ib ? "https://" : "http://") + b.Na + "/.lp?" + c.join("&");
    };
  }
  var Rg,
      Sg;
  Qg.prototype.open = function(a, b) {
    this.bf = 0;
    this.ka = b;
    this.tf = new Ng(a);
    this.vb = !1;
    var c = this;
    this.ob = setTimeout(function() {
      c.f("Timed out trying to connect.");
      c.fb();
      c.ob = null;
    }, Math.floor(3E4));
    Rc(function() {
      if (!c.vb) {
        c.Sa = new Tg(function(a, b, d, k, l) {
          Ug(c, arguments);
          if (c.Sa)
            if (c.ob && (clearTimeout(c.ob), c.ob = null), c.Ec = !0, "start" == a)
              c.id = b, c.Bg = d;
            else if ("close" === a)
              b ? (c.Sa.Hf = !1, Og(c.tf, b, function() {
                c.fb();
              })) : c.fb();
            else
              throw Error("Unrecognized command received: " + a);
        }, function(a, b) {
          Ug(c, arguments);
          Pg(c.tf, a, b);
        }, function() {
          c.fb();
        }, c.fd);
        var a = {start: "t"};
        a.ser = Math.floor(1E8 * Math.random());
        c.Sa.Qg && (a.cb = c.Sa.Qg);
        a.v = "5";
        c.Td && (a.s = c.Td);
        a = c.fd(a);
        c.f("Connecting via long-poll to " + a);
        Vg(c.Sa, a, function() {});
      }
    });
  };
  Qg.prototype.start = function() {
    var a = this.Sa,
        b = this.Bg;
    a.Fe = this.id;
    a.sf = b;
    for (a.he = !0; Wg(a); )
      ;
  };
  Qg.isAvailable = function() {
    return !Sg && !("object" === typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" === typeof Windows && "object" === typeof Windows.Sg) && (Rg || !1);
  };
  h = Qg.prototype;
  h.Ad = function() {};
  h.bd = function() {
    this.vb = !0;
    this.Sa && (this.Sa.close(), this.Sa = null);
    this.rf && (document.body.removeChild(this.rf), this.rf = null);
    this.ob && (clearTimeout(this.ob), this.ob = null);
  };
  h.fb = function() {
    this.vb || (this.f("Longpoll is closing itself"), this.bd(), this.ka && (this.ka(this.Ec), this.ka = null));
  };
  h.close = function() {
    this.vb || (this.f("Longpoll is being closed."), this.bd());
  };
  h.send = function(a) {
    a = B(a);
    this.mb += a.length;
    Ib(this.Ua, "bytes_sent", a.length);
    a = Ic(a);
    a = db(a, !0);
    a = Vc(a, 1840);
    for (var b = 0; b < a.length; b++) {
      var c = this.Sa;
      c.Yc.push({
        Gg: this.bf,
        Og: a.length,
        df: a[b]
      });
      c.he && Wg(c);
      this.bf++;
    }
  };
  function Ug(a, b) {
    var c = B(b).length;
    a.lb += c;
    Ib(a.Ua, "bytes_received", c);
  }
  function Tg(a, b, c, d) {
    this.fd = d;
    this.gb = c;
    this.Le = new ag;
    this.Yc = [];
    this.pe = Math.floor(1E8 * Math.random());
    this.Hf = !0;
    this.ag = a;
    this.sg = b;
  }
  Tg.prototype.close = function() {
    this.he = !1;
    if (this.Cd) {
      this.Cd.Ug.body.innerHTML = "";
      var a = this;
      setTimeout(function() {
        null !== a.Cd && (document.body.removeChild(a.Cd), a.Cd = null);
      }, Math.floor(0));
    }
    if (this.Fe) {
      var b = {disconn: "t"};
      b.id = this.Fe;
      b.pw = this.sf;
      b = this.fd(b);
      Xg(b);
    }
    if (b = this.gb)
      this.gb = null, b();
  };
  function Wg(a) {
    if (a.he && a.Hf && a.Le.count() < (0 < a.Yc.length ? 2 : 1)) {
      a.pe++;
      var b = {};
      b.id = a.Fe;
      b.pw = a.sf;
      b.ser = a.pe;
      for (var b = a.fd(b),
          c = "",
          d = 0; 0 < a.Yc.length; )
        if (1870 >= a.Yc[0].df.length + 30 + c.length) {
          var e = a.Yc.shift(),
              c = c + "&seg" + d + "=" + e.Gg + "&ts" + d + "=" + e.Og + "&d" + d + "=" + e.df;
          d++;
        } else
          break;
      Yg(a, b + c, a.pe);
      return !0;
    }
    return !1;
  }
  function Yg(a, b, c) {
    function d() {
      a.Le.remove(c);
      Wg(a);
    }
    a.Le.add(c, 1);
    var e = setTimeout(d, Math.floor(25E3));
    Vg(a, b, function() {
      clearTimeout(e);
      d();
    });
  }
  function Vg(a, b, c) {
    Zg(a, b, c);
  }
  var $g = null;
  function Xg(a, b) {
    $g || ($g = require("../../../../../node_modules/request/index"));
    $g(a, function(c, d, e) {
      if (c)
        throw "Rest request for " + a.url + " failed.";
      b && b(e);
    });
  }
  function Zg(a, b, c) {
    Xg({
      url: b,
      Vg: !0
    }, function(b) {
      ah(a, b);
      c();
    });
  }
  function ah(a, b) {
    eval("var jsonpCB = function(pLPCommand, pRTLPCB) {" + b + "}");
    jsonpCB(a.ag, a.sg);
  }
  ;
  var bh = null,
      bh = require("faye-websocket").Client;
  function ch(a, b, c) {
    this.ne = a;
    this.f = Mc(this.ne);
    this.frames = this.Hc = null;
    this.lb = this.mb = this.Xe = 0;
    this.Ua = Lb(b);
    this.Ob = (b.ib ? "wss://" : "ws://") + b.Na + "/.ws?v=5";
    b.host !== b.Na && (this.Ob = this.Ob + "&ns=" + b.yb);
    c && (this.Ob = this.Ob + "&s=" + c);
  }
  var dh;
  ch.prototype.open = function(a, b) {
    this.gb = b;
    this.rg = a;
    this.f("Websocket connecting to " + this.Ob);
    this.Ec = !1;
    Ac.set("previous_websocket_failure", !0);
    try {
      this.va = new bh(this.Ob, [], {headers: {"User-Agent": "Firebase/5/2.2.2/" + process.platform + "/Node"}});
    } catch (c) {
      this.f("Error instantiating WebSocket.");
      var d = c.message || c.data;
      d && this.f(d);
      this.fb();
      return ;
    }
    var e = this;
    this.va.onopen = function() {
      e.f("Websocket connected.");
      e.Ec = !0;
    };
    this.va.onclose = function() {
      e.f("Websocket connection was disconnected.");
      e.va = null;
      e.fb();
    };
    this.va.onmessage = function(a) {
      if (null !== e.va)
        if (a = a.data, e.lb += a.length, Ib(e.Ua, "bytes_received", a.length), eh(e), null !== e.frames)
          fh(e, a);
        else {
          a: {
            I(null === e.frames, "We already have a frame buffer");
            if (6 >= a.length) {
              var b = Number(a);
              if (!isNaN(b)) {
                e.Xe = b;
                e.frames = [];
                a = null;
                break a;
              }
            }
            e.Xe = 1;
            e.frames = [];
          }
          null !== a && fh(e, a);
        }
    };
    this.va.onerror = function(a) {
      e.f("WebSocket error.  Closing connection.");
      (a = a.message || a.data) && e.f(a);
      e.fb();
    };
  };
  ch.prototype.start = function() {};
  ch.isAvailable = function() {
    var a = !1;
    if ("undefined" !== typeof navigator && navigator.userAgent) {
      var b = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
      b && 1 < b.length && 4.4 > parseFloat(b[1]) && (a = !0);
    }
    return !a && null !== bh && !dh;
  };
  ch.responsesRequiredToBeHealthy = 2;
  ch.healthyTimeout = 3E4;
  h = ch.prototype;
  h.Ad = function() {
    Ac.remove("previous_websocket_failure");
  };
  function fh(a, b) {
    a.frames.push(b);
    if (a.frames.length == a.Xe) {
      var c = a.frames.join("");
      a.frames = null;
      c = jb(c);
      a.rg(c);
    }
  }
  h.send = function(a) {
    eh(this);
    a = B(a);
    this.mb += a.length;
    Ib(this.Ua, "bytes_sent", a.length);
    a = Vc(a, 16384);
    1 < a.length && this.va.send(String(a.length));
    for (var b = 0; b < a.length; b++)
      this.va.send(a[b]);
  };
  h.bd = function() {
    this.vb = !0;
    this.Hc && (clearInterval(this.Hc), this.Hc = null);
    this.va && (this.va.close(), this.va = null);
  };
  h.fb = function() {
    this.vb || (this.f("WebSocket is closing itself"), this.bd(), this.gb && (this.gb(this.Ec), this.gb = null));
  };
  h.close = function() {
    this.vb || (this.f("WebSocket is being closed"), this.bd());
  };
  function eh(a) {
    clearInterval(a.Hc);
    a.Hc = setInterval(function() {
      a.va && a.va.send("0");
      eh(a);
    }, Math.floor(45E3));
  }
  ;
  function gh(a) {
    hh(this, a);
  }
  var ih = [Qg, ch];
  function hh(a, b) {
    var c = ch && ch.isAvailable(),
        d = c && !(Ac.of || !0 === Ac.get("previous_websocket_failure"));
    b.Rg && (c || P("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), d = !0);
    if (d)
      a.dd = [ch];
    else {
      var e = a.dd = [];
      Wc(ih, function(a, b) {
        b && b.isAvailable() && e.push(b);
      });
    }
  }
  function jh(a) {
    if (0 < a.dd.length)
      return a.dd[0];
    throw Error("No transports available");
  }
  ;
  function kh(a, b, c, d, e, f) {
    this.id = a;
    this.f = Mc("c:" + this.id + ":");
    this.gc = c;
    this.Tc = d;
    this.ka = e;
    this.Je = f;
    this.H = b;
    this.Jd = [];
    this.$e = 0;
    this.Jf = new gh(b);
    this.Ta = 0;
    this.f("Connection created");
    lh(this);
  }
  function lh(a) {
    var b = jh(a.Jf);
    a.L = new b("c:" + a.id + ":" + a.$e++, a.H);
    a.Ne = b.responsesRequiredToBeHealthy || 0;
    var c = mh(a, a.L),
        d = nh(a, a.L);
    a.ed = a.L;
    a.ad = a.L;
    a.F = null;
    a.wb = !1;
    setTimeout(function() {
      a.L && a.L.open(c, d);
    }, Math.floor(0));
    b = b.healthyTimeout || 0;
    0 < b && (a.ud = setTimeout(function() {
      a.ud = null;
      a.wb || (a.L && 102400 < a.L.lb ? (a.f("Connection exceeded healthy timeout but has received " + a.L.lb + " bytes.  Marking connection healthy."), a.wb = !0, a.L.Ad()) : a.L && 10240 < a.L.mb ? a.f("Connection exceeded healthy timeout but has sent " + a.L.mb + " bytes.  Leaving connection alive.") : (a.f("Closing unhealthy connection after timeout."), a.close()));
    }, Math.floor(b)));
  }
  function nh(a, b) {
    return function(c) {
      b === a.L ? (a.L = null, c || 0 !== a.Ta ? 1 === a.Ta && a.f("Realtime connection lost.") : (a.f("Realtime connection failed."), "s-" === a.H.Na.substr(0, 2) && (Ac.remove("host:" + a.H.host), a.H.Na = a.H.host)), a.close()) : b === a.F ? (a.f("Secondary connection lost."), c = a.F, a.F = null, a.ed !== c && a.ad !== c || a.close()) : a.f("closing an old connection");
    };
  }
  function mh(a, b) {
    return function(c) {
      if (2 != a.Ta)
        if (b === a.ad) {
          var d = Tc("t", c);
          c = Tc("d", c);
          if ("c" == d) {
            if (d = Tc("t", c), "d" in c)
              if (c = c.d, "h" === d) {
                var d = c.ts,
                    e = c.v,
                    f = c.h;
                a.Td = c.s;
                Dc(a.H, f);
                0 == a.Ta && (a.L.start(), oh(a, a.L, d), "5" !== e && P("Protocol version mismatch detected"), c = a.Jf, (c = 1 < c.dd.length ? c.dd[1] : null) && ph(a, c));
              } else if ("n" === d) {
                a.f("recvd end transmission on primary");
                a.ad = a.F;
                for (c = 0; c < a.Jd.length; ++c)
                  a.Fd(a.Jd[c]);
                a.Jd = [];
                qh(a);
              } else
                "s" === d ? (a.f("Connection shutdown command received. Shutting down..."), a.Je && (a.Je(c), a.Je = null), a.ka = null, a.close()) : "r" === d ? (a.f("Reset packet received.  New host: " + c), Dc(a.H, c), 1 === a.Ta ? a.close() : (rh(a), lh(a))) : "e" === d ? Nc("Server Error: " + c) : "o" === d ? (a.f("got pong on primary."), sh(a), th(a)) : Nc("Unknown control packet command: " + d);
          } else
            "d" == d && a.Fd(c);
        } else if (b === a.F)
          if (d = Tc("t", c), c = Tc("d", c), "c" == d)
            "t" in c && (c = c.t, "a" === c ? uh(a) : "r" === c ? (a.f("Got a reset on secondary, closing it"), a.F.close(), a.ed !== a.F && a.ad !== a.F || a.close()) : "o" === c && (a.f("got pong on secondary."), a.Gf--, uh(a)));
          else if ("d" == d)
            a.Jd.push(c);
          else
            throw Error("Unknown protocol layer: " + d);
        else
          a.f("message on old connection");
    };
  }
  kh.prototype.Ca = function(a) {
    vh(this, {
      t: "d",
      d: a
    });
  };
  function qh(a) {
    a.ed === a.F && a.ad === a.F && (a.f("cleaning up and promoting a connection: " + a.F.ne), a.L = a.F, a.F = null);
  }
  function uh(a) {
    0 >= a.Gf ? (a.f("Secondary connection is healthy."), a.wb = !0, a.F.Ad(), a.F.start(), a.f("sending client ack on secondary"), a.F.send({
      t: "c",
      d: {
        t: "a",
        d: {}
      }
    }), a.f("Ending transmission on primary"), a.L.send({
      t: "c",
      d: {
        t: "n",
        d: {}
      }
    }), a.ed = a.F, qh(a)) : (a.f("sending ping on secondary."), a.F.send({
      t: "c",
      d: {
        t: "p",
        d: {}
      }
    }));
  }
  kh.prototype.Fd = function(a) {
    sh(this);
    this.gc(a);
  };
  function sh(a) {
    a.wb || (a.Ne--, 0 >= a.Ne && (a.f("Primary connection is healthy."), a.wb = !0, a.L.Ad()));
  }
  function ph(a, b) {
    a.F = new b("c:" + a.id + ":" + a.$e++, a.H, a.Td);
    a.Gf = b.responsesRequiredToBeHealthy || 0;
    a.F.open(mh(a, a.F), nh(a, a.F));
    setTimeout(function() {
      a.F && (a.f("Timed out trying to upgrade."), a.F.close());
    }, Math.floor(6E4));
  }
  function oh(a, b, c) {
    a.f("Realtime connection established.");
    a.L = b;
    a.Ta = 1;
    a.Tc && (a.Tc(c), a.Tc = null);
    0 === a.Ne ? (a.f("Primary connection is healthy."), a.wb = !0) : setTimeout(function() {
      th(a);
    }, Math.floor(5E3));
  }
  function th(a) {
    a.wb || 1 !== a.Ta || (a.f("sending ping on primary."), vh(a, {
      t: "c",
      d: {
        t: "p",
        d: {}
      }
    }));
  }
  function vh(a, b) {
    if (1 !== a.Ta)
      throw "Connection is not connected";
    a.ed.send(b);
  }
  kh.prototype.close = function() {
    2 !== this.Ta && (this.f("Closing realtime connection."), this.Ta = 2, rh(this), this.ka && (this.ka(), this.ka = null));
  };
  function rh(a) {
    a.f("Shutting down all connections");
    a.L && (a.L.close(), a.L = null);
    a.F && (a.F.close(), a.F = null);
    a.ud && (clearTimeout(a.ud), a.ud = null);
  }
  ;
  function wh(a, b, c, d) {
    this.id = xh++;
    this.f = Mc("p:" + this.id + ":");
    this.Hb = !0;
    this.aa = {};
    this.pa = [];
    this.Wc = 0;
    this.Sc = [];
    this.ma = !1;
    this.Za = 1E3;
    this.Bd = 3E5;
    this.Cb = b;
    this.Rc = c;
    this.Ke = d;
    this.H = a;
    this.Re = null;
    this.$c = {};
    this.Fg = 0;
    this.Ic = this.Be = null;
    yh(this, 0);
    Kf.Vb().Ab("visible", this.vg, this);
    -1 === a.host.indexOf("fblocal") && Jf.Vb().Ab("online", this.tg, this);
  }
  var xh = 0,
      zh = 0;
  h = wh.prototype;
  h.Ca = function(a, b, c) {
    var d = ++this.Fg;
    a = {
      r: d,
      a: a,
      b: b
    };
    this.f(B(a));
    I(this.ma, "sendRequest call when we're not connected not allowed.");
    this.Ra.Ca(a);
    c && (this.$c[d] = c);
  };
  h.pf = function(a, b, c, d) {
    var e = a.wa(),
        f = a.path.toString();
    this.f("Listen called for " + f + " " + e);
    this.aa[f] = this.aa[f] || {};
    I(!this.aa[f][e], "listen() called twice for same path/queryId.");
    a = {
      J: d,
      td: b,
      Cg: a,
      tag: c
    };
    this.aa[f][e] = a;
    this.ma && Ah(this, a);
  };
  function Ah(a, b) {
    var c = b.Cg,
        d = c.path.toString(),
        e = c.wa();
    a.f("Listen on " + d + " for " + e);
    var f = {p: d};
    b.tag && (f.q = ae(c.n), f.t = b.tag);
    f.h = b.td();
    a.Ca("q", f, function(f) {
      var k = f.d,
          l = f.s;
      if (k && "object" === typeof k && v(k, "w")) {
        var m = w(k, "w");
        ea(m) && 0 <= Na(m, "no_index") && P("Using an unspecified index. Consider adding " + ('".indexOn": "' + c.n.g.toString() + '"') + " at " + c.path.toString() + " to your security rules for better performance");
      }
      (a.aa[d] && a.aa[d][e]) === b && (a.f("listen response", f), "ok" !== l && Bh(a, d, e), b.J && b.J(l, k));
    });
  }
  h.P = function(a, b, c) {
    this.Ea = {
      cg: a,
      gf: !1,
      xc: b,
      hd: c
    };
    this.f("Authenticating using credential: " + a);
    Ch(this);
    (b = 40 == a.length) || (a = Zc(a).zc, b = "object" === typeof a && !0 === w(a, "admin"));
    b && (this.f("Admin auth credential detected.  Reducing max reconnect time."), this.Bd = 3E4);
  };
  h.ce = function(a) {
    delete this.Ea;
    this.ma && this.Ca("unauth", {}, function(b) {
      a(b.s, b.d);
    });
  };
  function Ch(a) {
    var b = a.Ea;
    a.ma && b && a.Ca("auth", {cred: b.cg}, function(c) {
      var d = c.s;
      c = c.d || "error";
      "ok" !== d && a.Ea === b && delete a.Ea;
      b.gf ? "ok" !== d && b.hd && b.hd(d, c) : (b.gf = !0, b.xc && b.xc(d, c));
    });
  }
  h.Kf = function(a, b) {
    var c = a.path.toString(),
        d = a.wa();
    this.f("Unlisten called for " + c + " " + d);
    if (Bh(this, c, d) && this.ma) {
      var e = ae(a.n);
      this.f("Unlisten on " + c + " for " + d);
      c = {p: c};
      b && (c.q = e, c.t = b);
      this.Ca("n", c);
    }
  };
  h.Ie = function(a, b, c) {
    this.ma ? Dh(this, "o", a, b, c) : this.Sc.push({
      ic: a,
      action: "o",
      data: b,
      J: c
    });
  };
  h.wf = function(a, b, c) {
    this.ma ? Dh(this, "om", a, b, c) : this.Sc.push({
      ic: a,
      action: "om",
      data: b,
      J: c
    });
  };
  h.Gd = function(a, b) {
    this.ma ? Dh(this, "oc", a, null, b) : this.Sc.push({
      ic: a,
      action: "oc",
      data: null,
      J: b
    });
  };
  function Dh(a, b, c, d, e) {
    c = {
      p: c,
      d: d
    };
    a.f("onDisconnect " + b, c);
    a.Ca(b, c, function(a) {
      e && setTimeout(function() {
        e(a.s, a.d);
      }, Math.floor(0));
    });
  }
  h.put = function(a, b, c, d) {
    Eh(this, "p", a, b, c, d);
  };
  h.qf = function(a, b, c, d) {
    Eh(this, "m", a, b, c, d);
  };
  function Eh(a, b, c, d, e, f) {
    d = {
      p: c,
      d: d
    };
    n(f) && (d.h = f);
    a.pa.push({
      action: b,
      Df: d,
      J: e
    });
    a.Wc++;
    b = a.pa.length - 1;
    a.ma ? Fh(a, b) : a.f("Buffering put: " + c);
  }
  function Fh(a, b) {
    var c = a.pa[b].action,
        d = a.pa[b].Df,
        e = a.pa[b].J;
    a.pa[b].Dg = a.ma;
    a.Ca(c, d, function(d) {
      a.f(c + " response", d);
      delete a.pa[b];
      a.Wc--;
      0 === a.Wc && (a.pa = []);
      e && e(d.s, d.d);
    });
  }
  h.Bf = function(a) {
    this.ma && (a = {c: a}, this.f("reportStats", a), this.Ca("s", a));
  };
  h.Fd = function(a) {
    if ("r" in a) {
      this.f("from server: " + B(a));
      var b = a.r,
          c = this.$c[b];
      c && (delete this.$c[b], c(a.b));
    } else {
      if ("error" in a)
        throw "A server-side error has occurred: " + a.error;
      "a" in a && (b = a.a, c = a.b, this.f("handleServerMessage", b, c), "d" === b ? this.Cb(c.p, c.d, !1, c.t) : "m" === b ? this.Cb(c.p, c.d, !0, c.t) : "c" === b ? Gh(this, c.p, c.q) : "ac" === b ? (a = c.s, b = c.d, c = this.Ea, delete this.Ea, c && c.hd && c.hd(a, b)) : "sd" === b ? this.Re ? this.Re(c) : "msg" in c && "undefined" !== typeof console && console.log("FIREBASE: " + c.msg.replace("\n", "\nFIREBASE: ")) : Nc("Unrecognized action received from server: " + B(b) + "\nAre you using the latest client?"));
    }
  };
  h.Tc = function(a) {
    this.f("connection ready");
    this.ma = !0;
    this.Ic = (new Date).getTime();
    this.Ke({serverTimeOffset: a - (new Date).getTime()});
    Hh(this);
    this.Rc(!0);
  };
  function yh(a, b) {
    I(!a.Ra, "Scheduling a connect when we're already connected/ing?");
    a.Rb && clearTimeout(a.Rb);
    a.Rb = setTimeout(function() {
      a.Rb = null;
      Ih(a);
    }, Math.floor(b));
  }
  h.vg = function(a) {
    a && !this.tc && this.Za === this.Bd && (this.f("Window became visible.  Reducing delay."), this.Za = 1E3, this.Ra || yh(this, 0));
    this.tc = a;
  };
  h.tg = function(a) {
    a ? (this.f("Browser went online.  Reconnecting."), this.Za = 1E3, this.Hb = !0, this.Ra || yh(this, 0)) : (this.f("Browser went offline.  Killing connection; don't reconnect."), this.Hb = !1, this.Ra && this.Ra.close());
  };
  h.xf = function() {
    this.f("data client disconnected");
    this.ma = !1;
    this.Ra = null;
    for (var a = 0; a < this.pa.length; a++) {
      var b = this.pa[a];
      b && "h" in b.Df && b.Dg && (b.J && b.J("disconnect"), delete this.pa[a], this.Wc--);
    }
    0 === this.Wc && (this.pa = []);
    if (this.Hb)
      this.tc ? this.Ic && (3E4 < (new Date).getTime() - this.Ic && (this.Za = 1E3), this.Ic = null) : (this.f("Window isn't visible.  Delaying reconnect."), this.Za = this.Bd, this.Be = (new Date).getTime()), a = Math.max(0, this.Za - ((new Date).getTime() - this.Be)), a *= Math.random(), this.f("Trying to reconnect in " + a + "ms"), yh(this, a), this.Za = Math.min(this.Bd, 1.3 * this.Za);
    else
      for (var c in this.$c)
        delete this.$c[c];
    this.Rc(!1);
  };
  function Ih(a) {
    if (a.Hb) {
      a.f("Making a connection attempt");
      a.Be = (new Date).getTime();
      a.Ic = null;
      var b = q(a.Fd, a),
          c = q(a.Tc, a),
          d = q(a.xf, a),
          e = a.id + ":" + zh++;
      a.Ra = new kh(e, a.H, b, c, d, function(b) {
        P(b + " (" + a.H.toString() + ")");
        a.Hb = !1;
      });
    }
  }
  h.ub = function() {
    this.Hb = !1;
    this.Ra ? this.Ra.close() : (this.Rb && (clearTimeout(this.Rb), this.Rb = null), this.ma && this.xf());
  };
  h.pc = function() {
    this.Hb = !0;
    this.Za = 1E3;
    this.Ra || yh(this, 0);
  };
  function Gh(a, b, c) {
    c = c ? Qa(c, function(a) {
      return Uc(a);
    }).join("$") : "default";
    (a = Bh(a, b, c)) && a.J && a.J("permission_denied");
  }
  function Bh(a, b, c) {
    b = (new K(b)).toString();
    var d;
    n(a.aa[b]) ? (d = a.aa[b][c], delete a.aa[b][c], 0 === pa(a.aa[b]) && delete a.aa[b]) : d = void 0;
    return d;
  }
  function Hh(a) {
    Ch(a);
    r(a.aa, function(b) {
      r(b, function(b) {
        Ah(a, b);
      });
    });
    for (var b = 0; b < a.pa.length; b++)
      a.pa[b] && Fh(a, b);
    for (; a.Sc.length; )
      b = a.Sc.shift(), Dh(a, b.action, b.ic, b.data, b.J);
  }
  ;
  var V = {ig: function() {
      Rg = dh = !0;
    }};
  V.forceLongPolling = V.ig;
  V.jg = function() {
    Sg = !0;
  };
  V.forceWebSockets = V.jg;
  V.Jg = function(a, b) {
    a.k.Qa.Re = b;
  };
  V.setSecurityDebugCallback = V.Jg;
  V.Te = function(a, b) {
    a.k.Te(b);
  };
  V.stats = V.Te;
  V.Ue = function(a, b) {
    a.k.Ue(b);
  };
  V.statsIncrementCounter = V.Ue;
  V.od = function(a) {
    return a.k.od;
  };
  V.dataUpdateCount = V.od;
  V.mg = function(a, b) {
    a.k.ze = b;
  };
  V.interceptServerData = V.mg;
  V.qg = function(a) {
    new qg(a);
  };
  V.onPopupOpen = V.qg;
  V.Hg = function(a) {
    dg = a;
  };
  V.setAuthenticationServer = V.Hg;
  function R(a, b, c) {
    this.B = a;
    this.V = b;
    this.g = c;
  }
  R.prototype.K = function() {
    y("Firebase.DataSnapshot.val", 0, 0, arguments.length);
    return this.B.K();
  };
  R.prototype.val = R.prototype.K;
  R.prototype.ff = function() {
    y("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
    return this.B.K(!0);
  };
  R.prototype.exportVal = R.prototype.ff;
  R.prototype.hg = function() {
    y("Firebase.DataSnapshot.exists", 0, 0, arguments.length);
    return !this.B.e();
  };
  R.prototype.exists = R.prototype.hg;
  R.prototype.w = function(a) {
    y("Firebase.DataSnapshot.child", 0, 1, arguments.length);
    ga(a) && (a = String(a));
    Vf("Firebase.DataSnapshot.child", a);
    var b = new K(a),
        c = this.V.w(b);
    return new R(this.B.oa(b), c, M);
  };
  R.prototype.child = R.prototype.w;
  R.prototype.Ga = function(a) {
    y("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
    Vf("Firebase.DataSnapshot.hasChild", a);
    var b = new K(a);
    return !this.B.oa(b).e();
  };
  R.prototype.hasChild = R.prototype.Ga;
  R.prototype.A = function() {
    y("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
    return this.B.A().K();
  };
  R.prototype.getPriority = R.prototype.A;
  R.prototype.forEach = function(a) {
    y("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
    A("Firebase.DataSnapshot.forEach", 1, a, !1);
    if (this.B.N())
      return !1;
    var b = this;
    return !!this.B.U(this.g, function(c, d) {
      return a(new R(d, b.V.w(c), M));
    });
  };
  R.prototype.forEach = R.prototype.forEach;
  R.prototype.sd = function() {
    y("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
    return this.B.N() ? !1 : !this.B.e();
  };
  R.prototype.hasChildren = R.prototype.sd;
  R.prototype.name = function() {
    P("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");
    y("Firebase.DataSnapshot.name", 0, 0, arguments.length);
    return this.key();
  };
  R.prototype.name = R.prototype.name;
  R.prototype.key = function() {
    y("Firebase.DataSnapshot.key", 0, 0, arguments.length);
    return this.V.key();
  };
  R.prototype.key = R.prototype.key;
  R.prototype.zb = function() {
    y("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
    return this.B.zb();
  };
  R.prototype.numChildren = R.prototype.zb;
  R.prototype.kc = function() {
    y("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
    return this.V;
  };
  R.prototype.ref = R.prototype.kc;
  function Jh(a, b) {
    this.H = a;
    this.Ua = Lb(a);
    this.ea = new rb;
    this.Ed = 1;
    this.Qa = null;
    b || 0 <= ("object" === typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) ? (this.ca = new ye(this.H, q(this.Cb, this)), setTimeout(q(this.Rc, this, !0), 0)) : this.ca = this.Qa = new wh(this.H, q(this.Cb, this), q(this.Rc, this), q(this.Ke, this));
    this.Mg = Mb(a, q(function() {
      return new Gb(this.Ua, this.ca);
    }, this));
    this.sc = new Af;
    this.ye = new kb;
    var c = this;
    this.yd = new ef({
      Se: function(a, b, f, g) {
        b = [];
        f = c.ye.j(a.path);
        f.e() || (b = gf(c.yd, new Rb(xe, a.path, f)), setTimeout(function() {
          g("ok");
        }, 0));
        return b;
      },
      Xd: ba
    });
    Kh(this, "connected", !1);
    this.ka = new nc;
    this.P = new Ag(a, q(this.ca.P, this.ca), q(this.ca.ce, this.ca), q(this.He, this));
    this.od = 0;
    this.ze = null;
    this.O = new ef({
      Se: function(a, b, f, g) {
        c.ca.pf(a, f, b, function(b, e) {
          var f = g(b, e);
          wb(c.ea, a.path, f);
        });
        return [];
      },
      Xd: function(a, b) {
        c.ca.Kf(a, b);
      }
    });
  }
  h = Jh.prototype;
  h.toString = function() {
    return (this.H.ib ? "https://" : "http://") + this.H.host;
  };
  h.name = function() {
    return this.H.yb;
  };
  function Lh(a) {
    a = a.ye.j(new K(".info/serverTimeOffset")).K() || 0;
    return (new Date).getTime() + a;
  }
  function Mh(a) {
    a = a = {timestamp: Lh(a)};
    a.timestamp = a.timestamp || (new Date).getTime();
    return a;
  }
  h.Cb = function(a, b, c, d) {
    this.od++;
    var e = new K(a);
    b = this.ze ? this.ze(a, b) : b;
    a = [];
    d ? c ? (b = na(b, function(a) {
      return L(a);
    }), a = pf(this.O, e, b, d)) : (b = L(b), a = lf(this.O, e, b, d)) : c ? (d = na(b, function(a) {
      return L(a);
    }), a = kf(this.O, e, d)) : (d = L(b), a = gf(this.O, new Rb(xe, e, d)));
    d = e;
    0 < a.length && (d = Nh(this, e));
    wb(this.ea, d, a);
  };
  h.Rc = function(a) {
    Kh(this, "connected", a);
    !1 === a && Oh(this);
  };
  h.Ke = function(a) {
    var b = this;
    Wc(a, function(a, d) {
      Kh(b, d, a);
    });
  };
  h.He = function(a) {
    Kh(this, "authenticated", a);
  };
  function Kh(a, b, c) {
    b = new K("/.info/" + b);
    c = L(c);
    var d = a.ye;
    d.Rd = d.Rd.G(b, c);
    c = gf(a.yd, new Rb(xe, b, c));
    wb(a.ea, b, c);
  }
  h.Gb = function(a, b, c, d) {
    this.f("set", {
      path: a.toString(),
      value: b,
      Xg: c
    });
    var e = Mh(this);
    b = L(b, c);
    var e = pc(b, e),
        f = this.Ed++,
        e = ff(this.O, a, e, f, !0);
    sb(this.ea, e);
    var g = this;
    this.ca.put(a.toString(), b.K(!0), function(b, c) {
      var e = "ok" === b;
      e || P("set at " + a + " failed: " + b);
      e = jf(g.O, f, !e);
      wb(g.ea, a, e);
      Ph(d, b, c);
    });
    e = Qh(this, a);
    Nh(this, e);
    wb(this.ea, e, []);
  };
  h.update = function(a, b, c) {
    this.f("update", {
      path: a.toString(),
      value: b
    });
    var d = !0,
        e = Mh(this),
        f = {};
    r(b, function(a, b) {
      d = !1;
      var c = L(a);
      f[b] = pc(c, e);
    });
    if (d)
      yb("update() called with empty data.  Don't do anything."), Ph(c, "ok");
    else {
      var g = this.Ed++,
          k = hf(this.O, a, f, g);
      sb(this.ea, k);
      var l = this;
      this.ca.qf(a.toString(), b, function(b, d) {
        var e = "ok" === b;
        e || P("update at " + a + " failed: " + b);
        var e = jf(l.O, g, !e),
            f = a;
        0 < e.length && (f = Nh(l, a));
        wb(l.ea, f, e);
        Ph(c, b, d);
      });
      b = Qh(this, a);
      Nh(this, b);
      wb(this.ea, a, []);
    }
  };
  function Oh(a) {
    a.f("onDisconnectEvents");
    var b = Mh(a),
        c = [];
    oc(mc(a.ka, b), F, function(b, e) {
      c = c.concat(gf(a.O, new Rb(xe, b, e)));
      var f = Qh(a, b);
      Nh(a, f);
    });
    a.ka = new nc;
    wb(a.ea, F, c);
  }
  h.Gd = function(a, b) {
    var c = this;
    this.ca.Gd(a.toString(), function(d, e) {
      "ok" === d && cg(c.ka, a);
      Ph(b, d, e);
    });
  };
  function Rh(a, b, c, d) {
    var e = L(c);
    a.ca.Ie(b.toString(), e.K(!0), function(c, g) {
      "ok" === c && a.ka.lc(b, e);
      Ph(d, c, g);
    });
  }
  function Sh(a, b, c, d, e) {
    var f = L(c, d);
    a.ca.Ie(b.toString(), f.K(!0), function(c, d) {
      "ok" === c && a.ka.lc(b, f);
      Ph(e, c, d);
    });
  }
  function Th(a, b, c, d) {
    var e = !0,
        f;
    for (f in c)
      e = !1;
    e ? (yb("onDisconnect().update() called with empty data.  Don't do anything."), Ph(d, "ok")) : a.ca.wf(b.toString(), c, function(e, f) {
      if ("ok" === e)
        for (var l in c) {
          var m = L(c[l]);
          a.ka.lc(b.w(l), m);
        }
      Ph(d, e, f);
    });
  }
  function Uh(a, b, c) {
    c = ".info" === O(b.path) ? a.yd.Lb(b, c) : a.O.Lb(b, c);
    ub(a.ea, b.path, c);
  }
  h.ub = function() {
    this.Qa && this.Qa.ub();
  };
  h.pc = function() {
    this.Qa && this.Qa.pc();
  };
  h.Te = function(a) {
    if ("undefined" !== typeof console) {
      a ? (this.Wd || (this.Wd = new Fb(this.Ua)), a = this.Wd.get()) : a = this.Ua.get();
      var b = Ra(sa(a), function(a, b) {
        return Math.max(b.length, a);
      }, 0),
          c;
      for (c in a) {
        for (var d = a[c],
            e = c.length; e < b + 2; e++)
          c += " ";
        console.log(c + d);
      }
    }
  };
  h.Ue = function(a) {
    Ib(this.Ua, a);
    this.Mg.If[a] = !0;
  };
  h.f = function(a) {
    var b = "";
    this.Qa && (b = this.Qa.id + ":");
    yb(b, arguments);
  };
  function Ph(a, b, c) {
    a && zb(function() {
      if ("ok" == b)
        a(null);
      else {
        var d = (b || "error").toUpperCase(),
            e = d;
        c && (e += ": " + c);
        e = Error(e);
        e.code = d;
        a(e);
      }
    });
  }
  ;
  function Vh(a, b, c, d, e) {
    function f() {}
    a.f("transaction on " + b);
    var g = new T(a, b);
    g.Ab("value", f);
    c = {
      path: b,
      update: c,
      J: d,
      status: null,
      zf: Ec(),
      Ye: e,
      Ff: 0,
      de: function() {
        g.fc("value", f);
      },
      ge: null,
      Aa: null,
      ld: null,
      md: null,
      nd: null
    };
    d = a.O.ua(b, void 0) || C;
    c.ld = d;
    d = c.update(d.K());
    if (n(d)) {
      Qf("transaction failed: Data returned ", d, c.path);
      c.status = 1;
      e = Bf(a.sc, b);
      var k = e.Ba() || [];
      k.push(c);
      Cf(e, k);
      "object" === typeof d && null !== d && v(d, ".priority") ? (k = w(d, ".priority"), I(Of(k), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) : k = (a.O.ua(b) || C).A().K();
      e = Mh(a);
      d = L(d, k);
      e = pc(d, e);
      c.md = d;
      c.nd = e;
      c.Aa = a.Ed++;
      c = ff(a.O, b, e, c.Aa, c.Ye);
      wb(a.ea, b, c);
      Wh(a);
    } else
      c.de(), c.md = null, c.nd = null, c.J && (a = new R(c.ld, new T(a, c.path), M), c.J(null, !1, a));
  }
  function Wh(a, b) {
    var c = b || a.sc;
    b || Xh(a, c);
    if (null !== c.Ba()) {
      var d = Yh(a, c);
      I(0 < d.length, "Sending zero length transaction queue");
      Sa(d, function(a) {
        return 1 === a.status;
      }) && Zh(a, c.path(), d);
    } else
      c.sd() && c.U(function(b) {
        Wh(a, b);
      });
  }
  function Zh(a, b, c) {
    for (var d = Qa(c, function(a) {
      return a.Aa;
    }),
        e = a.O.ua(b, d) || C,
        d = e,
        e = e.hash(),
        f = 0; f < c.length; f++) {
      var g = c[f];
      I(1 === g.status, "tryToSendTransactionQueue_: items in queue should all be run.");
      g.status = 2;
      g.Ff++;
      var k = N(b, g.path),
          d = d.G(k, g.md);
    }
    d = d.K(!0);
    a.ca.put(b.toString(), d, function(d) {
      a.f("transaction put response", {
        path: b.toString(),
        status: d
      });
      var e = [];
      if ("ok" === d) {
        d = [];
        for (f = 0; f < c.length; f++) {
          c[f].status = 3;
          e = e.concat(jf(a.O, c[f].Aa));
          if (c[f].J) {
            var g = c[f].nd,
                k = new T(a, c[f].path);
            d.push(q(c[f].J, null, null, !0, new R(g, k, M)));
          }
          c[f].de();
        }
        Xh(a, Bf(a.sc, b));
        Wh(a);
        wb(a.ea, b, e);
        for (f = 0; f < d.length; f++)
          zb(d[f]);
      } else {
        if ("datastale" === d)
          for (f = 0; f < c.length; f++)
            c[f].status = 4 === c[f].status ? 5 : 1;
        else
          for (P("transaction at " + b.toString() + " failed: " + d), f = 0; f < c.length; f++)
            c[f].status = 5, c[f].ge = d;
        Nh(a, b);
      }
    }, e);
  }
  function Nh(a, b) {
    var c = $h(a, b),
        d = c.path(),
        c = Yh(a, c);
    ai(a, c, d);
    return d;
  }
  function ai(a, b, c) {
    if (0 !== b.length) {
      for (var d = [],
          e = [],
          f = Qa(b, function(a) {
            return a.Aa;
          }),
          g = 0; g < b.length; g++) {
        var k = b[g],
            l = N(c, k.path),
            m = !1,
            t;
        I(null !== l, "rerunTransactionsUnderNode_: relativePath should not be null.");
        if (5 === k.status)
          m = !0, t = k.ge, e = e.concat(jf(a.O, k.Aa, !0));
        else if (1 === k.status)
          if (25 <= k.Ff)
            m = !0, t = "maxretry", e = e.concat(jf(a.O, k.Aa, !0));
          else {
            var x = a.O.ua(k.path, f) || C;
            k.ld = x;
            var J = b[g].update(x.K());
            n(J) ? (Qf("transaction failed: Data returned ", J, k.path), l = L(J), "object" === typeof J && null != J && v(J, ".priority") || (l = l.da(x.A())), x = k.Aa, J = Mh(a), J = pc(l, J), k.md = l, k.nd = J, k.Aa = a.Ed++, Va(f, x), e = e.concat(ff(a.O, k.path, J, k.Aa, k.Ye)), e = e.concat(jf(a.O, x, !0))) : (m = !0, t = "nodata", e = e.concat(jf(a.O, k.Aa, !0)));
          }
        wb(a.ea, c, e);
        e = [];
        m && (b[g].status = 3, setTimeout(b[g].de, Math.floor(0)), b[g].J && ("nodata" === t ? (k = new T(a, b[g].path), d.push(q(b[g].J, null, null, !1, new R(b[g].ld, k, M)))) : d.push(q(b[g].J, null, Error(t), !1, null))));
      }
      Xh(a, a.sc);
      for (g = 0; g < d.length; g++)
        zb(d[g]);
      Wh(a);
    }
  }
  function $h(a, b) {
    for (var c,
        d = a.sc; null !== (c = O(b)) && null === d.Ba(); )
      d = Bf(d, c), b = G(b);
    return d;
  }
  function Yh(a, b) {
    var c = [];
    bi(a, b, c);
    c.sort(function(a, b) {
      return a.zf - b.zf;
    });
    return c;
  }
  function bi(a, b, c) {
    var d = b.Ba();
    if (null !== d)
      for (var e = 0; e < d.length; e++)
        c.push(d[e]);
    b.U(function(b) {
      bi(a, b, c);
    });
  }
  function Xh(a, b) {
    var c = b.Ba();
    if (c) {
      for (var d = 0,
          e = 0; e < c.length; e++)
        3 !== c[e].status && (c[d] = c[e], d++);
      c.length = d;
      Cf(b, 0 < c.length ? c : null);
    }
    b.U(function(b) {
      Xh(a, b);
    });
  }
  function Qh(a, b) {
    var c = $h(a, b).path(),
        d = Bf(a.sc, b);
    Ff(d, function(b) {
      ci(a, b);
    });
    ci(a, d);
    Ef(d, function(b) {
      ci(a, b);
    });
    return c;
  }
  function ci(a, b) {
    var c = b.Ba();
    if (null !== c) {
      for (var d = [],
          e = [],
          f = -1,
          g = 0; g < c.length; g++)
        4 !== c[g].status && (2 === c[g].status ? (I(f === g - 1, "All SENT items should be at beginning of queue."), f = g, c[g].status = 4, c[g].ge = "set") : (I(1 === c[g].status, "Unexpected transaction status in abort"), c[g].de(), e = e.concat(jf(a.O, c[g].Aa, !0)), c[g].J && d.push(q(c[g].J, null, Error("set"), !1, null))));
      -1 === f ? Cf(b, null) : c.length = f + 1;
      wb(a.ea, b.path(), e);
      for (g = 0; g < d.length; g++)
        zb(d[g]);
    }
  }
  ;
  function W() {
    this.mc = {};
    this.Lf = !1;
  }
  ca(W);
  W.prototype.ub = function() {
    for (var a in this.mc)
      this.mc[a].ub();
  };
  W.prototype.interrupt = W.prototype.ub;
  W.prototype.pc = function() {
    for (var a in this.mc)
      this.mc[a].pc();
  };
  W.prototype.resume = W.prototype.pc;
  W.prototype.re = function() {
    this.Lf = !0;
  };
  function X(a, b) {
    this.Zc = a;
    this.qa = b;
  }
  X.prototype.cancel = function(a) {
    y("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
    A("Firebase.onDisconnect().cancel", 1, a, !0);
    this.Zc.Gd(this.qa, a || null);
  };
  X.prototype.cancel = X.prototype.cancel;
  X.prototype.remove = function(a) {
    y("Firebase.onDisconnect().remove", 0, 1, arguments.length);
    Wf("Firebase.onDisconnect().remove", this.qa);
    A("Firebase.onDisconnect().remove", 1, a, !0);
    Rh(this.Zc, this.qa, null, a);
  };
  X.prototype.remove = X.prototype.remove;
  X.prototype.set = function(a, b) {
    y("Firebase.onDisconnect().set", 1, 2, arguments.length);
    Wf("Firebase.onDisconnect().set", this.qa);
    Pf("Firebase.onDisconnect().set", a, this.qa, !1);
    A("Firebase.onDisconnect().set", 2, b, !0);
    Rh(this.Zc, this.qa, a, b);
  };
  X.prototype.set = X.prototype.set;
  X.prototype.Gb = function(a, b, c) {
    y("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
    Wf("Firebase.onDisconnect().setWithPriority", this.qa);
    Pf("Firebase.onDisconnect().setWithPriority", a, this.qa, !1);
    Sf("Firebase.onDisconnect().setWithPriority", 2, b);
    A("Firebase.onDisconnect().setWithPriority", 3, c, !0);
    Sh(this.Zc, this.qa, a, b, c);
  };
  X.prototype.setWithPriority = X.prototype.Gb;
  X.prototype.update = function(a, b) {
    y("Firebase.onDisconnect().update", 1, 2, arguments.length);
    Wf("Firebase.onDisconnect().update", this.qa);
    if (ea(a)) {
      for (var c = {},
          d = 0; d < a.length; ++d)
        c["" + d] = a[d];
      a = c;
      P("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
    }
    Rf("Firebase.onDisconnect().update", a, this.qa);
    A("Firebase.onDisconnect().update", 2, b, !0);
    Th(this.Zc, this.qa, a, b);
  };
  X.prototype.update = X.prototype.update;
  function Y(a, b, c, d) {
    this.k = a;
    this.path = b;
    this.n = c;
    this.hc = d;
  }
  function di(a) {
    var b = null,
        c = null;
    a.la && (b = md(a));
    a.na && (c = od(a));
    if (a.g === Td) {
      if (a.la) {
        if ("[MIN_NAME]" != ld(a))
          throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
        if ("string" !== typeof b)
          throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
      }
      if (a.na) {
        if ("[MAX_NAME]" != nd(a))
          throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
        if ("string" !== typeof c)
          throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
      }
    } else if (a.g === M) {
      if (null != b && !Of(b) || null != c && !Of(c))
        throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");
    } else if (I(a.g instanceof Pd || a.g === Wd, "unknown index type."), null != b && "object" === typeof b || null != c && "object" === typeof c)
      throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
  }
  function ei(a) {
    if (a.la && a.na && a.ia && (!a.ia || "" === a.Kb))
      throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
  }
  function fi(a, b) {
    if (!0 === a.hc)
      throw Error(b + ": You can't combine multiple orderBy calls.");
  }
  Y.prototype.kc = function() {
    y("Query.ref", 0, 0, arguments.length);
    return new T(this.k, this.path);
  };
  Y.prototype.ref = Y.prototype.kc;
  Y.prototype.Ab = function(a, b, c, d) {
    y("Query.on", 2, 4, arguments.length);
    Tf("Query.on", a, !1);
    A("Query.on", 2, b, !1);
    var e = gi("Query.on", c, d);
    if ("value" === a)
      Uh(this.k, this, new hd(b, e.cancel || null, e.La || null));
    else {
      var f = {};
      f[a] = b;
      Uh(this.k, this, new id(f, e.cancel, e.La));
    }
    return b;
  };
  Y.prototype.on = Y.prototype.Ab;
  Y.prototype.fc = function(a, b, c) {
    y("Query.off", 0, 3, arguments.length);
    Tf("Query.off", a, !0);
    A("Query.off", 2, b, !0);
    ib("Query.off", 3, c);
    var d = null,
        e = null;
    "value" === a ? d = new hd(b || null, null, c || null) : a && (b && (e = {}, e[a] = b), d = new id(e, null, c || null));
    e = this.k;
    d = ".info" === O(this.path) ? e.yd.hb(this, d) : e.O.hb(this, d);
    ub(e.ea, this.path, d);
  };
  Y.prototype.off = Y.prototype.fc;
  Y.prototype.wg = function(a, b) {
    function c(g) {
      f && (f = !1, e.fc(a, c), b.call(d.La, g));
    }
    y("Query.once", 2, 4, arguments.length);
    Tf("Query.once", a, !1);
    A("Query.once", 2, b, !1);
    var d = gi("Query.once", arguments[2], arguments[3]),
        e = this,
        f = !0;
    this.Ab(a, c, function(b) {
      e.fc(a, c);
      d.cancel && d.cancel.call(d.La, b);
    });
  };
  Y.prototype.once = Y.prototype.wg;
  Y.prototype.Ce = function(a) {
    P("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");
    y("Query.limit", 1, 1, arguments.length);
    if (!ga(a) || Math.floor(a) !== a || 0 >= a)
      throw Error("Query.limit: First argument must be a positive integer.");
    if (this.n.ia)
      throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");
    var b = this.n.Ce(a);
    ei(b);
    return new Y(this.k, this.path, b, this.hc);
  };
  Y.prototype.limit = Y.prototype.Ce;
  Y.prototype.De = function(a) {
    y("Query.limitToFirst", 1, 1, arguments.length);
    if (!ga(a) || Math.floor(a) !== a || 0 >= a)
      throw Error("Query.limitToFirst: First argument must be a positive integer.");
    if (this.n.ia)
      throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
    return new Y(this.k, this.path, this.n.De(a), this.hc);
  };
  Y.prototype.limitToFirst = Y.prototype.De;
  Y.prototype.Ee = function(a) {
    y("Query.limitToLast", 1, 1, arguments.length);
    if (!ga(a) || Math.floor(a) !== a || 0 >= a)
      throw Error("Query.limitToLast: First argument must be a positive integer.");
    if (this.n.ia)
      throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
    return new Y(this.k, this.path, this.n.Ee(a), this.hc);
  };
  Y.prototype.limitToLast = Y.prototype.Ee;
  Y.prototype.xg = function(a) {
    y("Query.orderByChild", 1, 1, arguments.length);
    if ("$key" === a)
      throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
    if ("$priority" === a)
      throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
    if ("$value" === a)
      throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
    Uf("Query.orderByChild", 1, a, !1);
    fi(this, "Query.orderByChild");
    var b = $d(this.n, new Pd(a));
    di(b);
    return new Y(this.k, this.path, b, !0);
  };
  Y.prototype.orderByChild = Y.prototype.xg;
  Y.prototype.yg = function() {
    y("Query.orderByKey", 0, 0, arguments.length);
    fi(this, "Query.orderByKey");
    var a = $d(this.n, Td);
    di(a);
    return new Y(this.k, this.path, a, !0);
  };
  Y.prototype.orderByKey = Y.prototype.yg;
  Y.prototype.zg = function() {
    y("Query.orderByPriority", 0, 0, arguments.length);
    fi(this, "Query.orderByPriority");
    var a = $d(this.n, M);
    di(a);
    return new Y(this.k, this.path, a, !0);
  };
  Y.prototype.orderByPriority = Y.prototype.zg;
  Y.prototype.Ag = function() {
    y("Query.orderByValue", 0, 0, arguments.length);
    fi(this, "Query.orderByValue");
    var a = $d(this.n, Wd);
    di(a);
    return new Y(this.k, this.path, a, !0);
  };
  Y.prototype.orderByValue = Y.prototype.Ag;
  Y.prototype.Vd = function(a, b) {
    y("Query.startAt", 0, 2, arguments.length);
    Pf("Query.startAt", a, this.path, !0);
    Uf("Query.startAt", 2, b, !0);
    var c = this.n.Vd(a, b);
    ei(c);
    di(c);
    if (this.n.la)
      throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
    n(a) || (b = a = null);
    return new Y(this.k, this.path, c, this.hc);
  };
  Y.prototype.startAt = Y.prototype.Vd;
  Y.prototype.pd = function(a, b) {
    y("Query.endAt", 0, 2, arguments.length);
    Pf("Query.endAt", a, this.path, !0);
    Uf("Query.endAt", 2, b, !0);
    var c = this.n.pd(a, b);
    ei(c);
    di(c);
    if (this.n.na)
      throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
    return new Y(this.k, this.path, c, this.hc);
  };
  Y.prototype.endAt = Y.prototype.pd;
  Y.prototype.eg = function(a, b) {
    y("Query.equalTo", 1, 2, arguments.length);
    Pf("Query.equalTo", a, this.path, !1);
    Uf("Query.equalTo", 2, b, !0);
    if (this.n.la)
      throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");
    if (this.n.na)
      throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
    return this.Vd(a, b).pd(a, b);
  };
  Y.prototype.equalTo = Y.prototype.eg;
  Y.prototype.toString = function() {
    y("Query.toString", 0, 0, arguments.length);
    for (var a = this.path,
        b = "",
        c = a.Y; c < a.o.length; c++)
      "" !== a.o[c] && (b += "/" + encodeURIComponent(String(a.o[c])));
    a = this.k.toString() + (b || "/");
    b = gb(ce(this.n));
    return a += b.replace(/^&/, "");
  };
  Y.prototype.toString = Y.prototype.toString;
  Y.prototype.wa = function() {
    var a = Uc(ae(this.n));
    return "{}" === a ? "default" : a;
  };
  function gi(a, b, c) {
    var d = {
      cancel: null,
      La: null
    };
    if (b && c)
      d.cancel = b, A(a, 3, d.cancel, !0), d.La = c, ib(a, 4, d.La);
    else if (b)
      if ("object" === typeof b && null !== b)
        d.La = b;
      else if ("function" === typeof b)
        d.cancel = b;
      else
        throw Error(z(a, 3, !0) + " must either be a cancel callback or a context object.");
    return d;
  }
  ;
  var Z = {};
  Z.uc = wh;
  Z.DataConnection = Z.uc;
  wh.prototype.Lg = function(a, b) {
    this.Ca("q", {p: a}, b);
  };
  Z.uc.prototype.simpleListen = Z.uc.prototype.Lg;
  wh.prototype.dg = function(a, b) {
    this.Ca("echo", {d: a}, b);
  };
  Z.uc.prototype.echo = Z.uc.prototype.dg;
  wh.prototype.interrupt = wh.prototype.ub;
  Z.Of = kh;
  Z.RealTimeConnection = Z.Of;
  kh.prototype.sendRequest = kh.prototype.Ca;
  kh.prototype.close = kh.prototype.close;
  Z.lg = function(a) {
    var b = wh.prototype.put;
    wh.prototype.put = function(c, d, e, f) {
      n(f) && (f = a());
      b.call(this, c, d, e, f);
    };
    return function() {
      wh.prototype.put = b;
    };
  };
  Z.hijackHash = Z.lg;
  Z.Nf = Cc;
  Z.ConnectionTarget = Z.Nf;
  Z.wa = function(a) {
    return a.wa();
  };
  Z.queryIdentifier = Z.wa;
  Z.ng = function(a) {
    return a.k.Qa.aa;
  };
  Z.listens = Z.ng;
  Z.re = function(a) {
    a.re();
  };
  Z.forceRestClient = Z.re;
  function T(a, b) {
    var c,
        d,
        e;
    if (a instanceof Jh)
      c = a, d = b;
    else {
      y("new Firebase", 1, 2, arguments.length);
      d = Pc(arguments[0]);
      c = d.Ng;
      "firebase" === d.domain && Oc(d.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
      c || Oc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
      d.ib || "undefined" !== typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && P("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
      c = new Cc(d.host, d.ib, c, "ws" === d.scheme || "wss" === d.scheme);
      d = new K(d.ic);
      e = d.toString();
      var f;
      !(f = !p(c.host) || 0 === c.host.length || !Nf(c.yb)) && (f = 0 !== e.length) && (e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), f = !(p(e) && 0 !== e.length && !Mf.test(e)));
      if (f)
        throw Error(z("new Firebase", 1, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
      if (b)
        if (b instanceof W)
          e = b;
        else if (p(b))
          e = W.Vb(), c.Ld = b;
        else
          throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
      else
        e = W.Vb();
      f = c.toString();
      var g = w(e.mc, f);
      g || (g = new Jh(c, e.Lf), e.mc[f] = g);
      c = g;
    }
    Y.call(this, c, d, Yd, !1);
  }
  ma(T, Y);
  var hi = T,
      ii = ["Firebase"],
      ji = aa;
  ii[0] in ji || !ji.execScript || ji.execScript("var " + ii[0]);
  for (var ki; ii.length && (ki = ii.shift()); )
    !ii.length && n(hi) ? ji[ki] = hi : ji = ji[ki] ? ji[ki] : ji[ki] = {};
  module.exports = T;
  T.prototype.name = function() {
    P("Firebase.name() being deprecated. Please use Firebase.key() instead.");
    y("Firebase.name", 0, 0, arguments.length);
    return this.key();
  };
  T.prototype.name = T.prototype.name;
  T.prototype.key = function() {
    y("Firebase.key", 0, 0, arguments.length);
    return this.path.e() ? null : sc(this.path);
  };
  T.prototype.key = T.prototype.key;
  T.prototype.w = function(a) {
    y("Firebase.child", 1, 1, arguments.length);
    if (ga(a))
      a = String(a);
    else if (!(a instanceof K))
      if (null === O(this.path)) {
        var b = a;
        b && (b = b.replace(/^\/*\.info(\/|$)/, "/"));
        Vf("Firebase.child", b);
      } else
        Vf("Firebase.child", a);
    return new T(this.k, this.path.w(a));
  };
  T.prototype.child = T.prototype.w;
  T.prototype.parent = function() {
    y("Firebase.parent", 0, 0, arguments.length);
    var a = this.path.parent();
    return null === a ? null : new T(this.k, a);
  };
  T.prototype.parent = T.prototype.parent;
  T.prototype.root = function() {
    y("Firebase.ref", 0, 0, arguments.length);
    for (var a = this; null !== a.parent(); )
      a = a.parent();
    return a;
  };
  T.prototype.root = T.prototype.root;
  T.prototype.set = function(a, b) {
    y("Firebase.set", 1, 2, arguments.length);
    Wf("Firebase.set", this.path);
    Pf("Firebase.set", a, this.path, !1);
    A("Firebase.set", 2, b, !0);
    this.k.Gb(this.path, a, null, b || null);
  };
  T.prototype.set = T.prototype.set;
  T.prototype.update = function(a, b) {
    y("Firebase.update", 1, 2, arguments.length);
    Wf("Firebase.update", this.path);
    if (ea(a)) {
      for (var c = {},
          d = 0; d < a.length; ++d)
        c["" + d] = a[d];
      a = c;
      P("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
    }
    Rf("Firebase.update", a, this.path);
    A("Firebase.update", 2, b, !0);
    this.k.update(this.path, a, b || null);
  };
  T.prototype.update = T.prototype.update;
  T.prototype.Gb = function(a, b, c) {
    y("Firebase.setWithPriority", 2, 3, arguments.length);
    Wf("Firebase.setWithPriority", this.path);
    Pf("Firebase.setWithPriority", a, this.path, !1);
    Sf("Firebase.setWithPriority", 2, b);
    A("Firebase.setWithPriority", 3, c, !0);
    if (".length" === this.key() || ".keys" === this.key())
      throw "Firebase.setWithPriority failed: " + this.key() + " is a read-only object.";
    this.k.Gb(this.path, a, b, c || null);
  };
  T.prototype.setWithPriority = T.prototype.Gb;
  T.prototype.remove = function(a) {
    y("Firebase.remove", 0, 1, arguments.length);
    Wf("Firebase.remove", this.path);
    A("Firebase.remove", 1, a, !0);
    this.set(null, a);
  };
  T.prototype.remove = T.prototype.remove;
  T.prototype.transaction = function(a, b, c) {
    y("Firebase.transaction", 1, 3, arguments.length);
    Wf("Firebase.transaction", this.path);
    A("Firebase.transaction", 1, a, !1);
    A("Firebase.transaction", 2, b, !0);
    if (n(c) && "boolean" != typeof c)
      throw Error(z("Firebase.transaction", 3, !0) + "must be a boolean.");
    if (".length" === this.key() || ".keys" === this.key())
      throw "Firebase.transaction failed: " + this.key() + " is a read-only object.";
    "undefined" === typeof c && (c = !0);
    Vh(this.k, this.path, a, b || null, c);
  };
  T.prototype.transaction = T.prototype.transaction;
  T.prototype.Ig = function(a, b) {
    y("Firebase.setPriority", 1, 2, arguments.length);
    Wf("Firebase.setPriority", this.path);
    Sf("Firebase.setPriority", 1, a);
    A("Firebase.setPriority", 2, b, !0);
    this.k.Gb(this.path.w(".priority"), a, null, b);
  };
  T.prototype.setPriority = T.prototype.Ig;
  T.prototype.push = function(a, b) {
    y("Firebase.push", 0, 2, arguments.length);
    Wf("Firebase.push", this.path);
    Pf("Firebase.push", a, this.path, !0);
    A("Firebase.push", 2, b, !0);
    var c = Lh(this.k),
        c = If(c),
        c = this.w(c);
    "undefined" !== typeof a && null !== a && c.set(a, b);
    return c;
  };
  T.prototype.push = T.prototype.push;
  T.prototype.gb = function() {
    Wf("Firebase.onDisconnect", this.path);
    return new X(this.k, this.path);
  };
  T.prototype.onDisconnect = T.prototype.gb;
  T.prototype.P = function(a, b, c) {
    P("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");
    y("Firebase.auth", 1, 3, arguments.length);
    Xf("Firebase.auth", a);
    A("Firebase.auth", 2, b, !0);
    A("Firebase.auth", 3, b, !0);
    Gg(this.k.P, a, {}, {remember: "none"}, b, c);
  };
  T.prototype.auth = T.prototype.P;
  T.prototype.ce = function(a) {
    y("Firebase.unauth", 0, 1, arguments.length);
    A("Firebase.unauth", 1, a, !0);
    Hg(this.k.P, a);
  };
  T.prototype.unauth = T.prototype.ce;
  T.prototype.te = function() {
    y("Firebase.getAuth", 0, 0, arguments.length);
    return this.k.P.te();
  };
  T.prototype.getAuth = T.prototype.te;
  T.prototype.pg = function(a, b) {
    y("Firebase.onAuth", 1, 2, arguments.length);
    A("Firebase.onAuth", 1, a, !1);
    ib("Firebase.onAuth", 2, b);
    this.k.P.Ab("auth_status", a, b);
  };
  T.prototype.onAuth = T.prototype.pg;
  T.prototype.og = function(a, b) {
    y("Firebase.offAuth", 1, 2, arguments.length);
    A("Firebase.offAuth", 1, a, !1);
    ib("Firebase.offAuth", 2, b);
    this.k.P.fc("auth_status", a, b);
  };
  T.prototype.offAuth = T.prototype.og;
  T.prototype.Sf = function(a, b, c) {
    y("Firebase.authWithCustomToken", 2, 3, arguments.length);
    Xf("Firebase.authWithCustomToken", a);
    A("Firebase.authWithCustomToken", 2, b, !1);
    Zf("Firebase.authWithCustomToken", 3, c, !0);
    Gg(this.k.P, a, {}, c || {}, b);
  };
  T.prototype.authWithCustomToken = T.prototype.Sf;
  T.prototype.Tf = function(a, b, c) {
    y("Firebase.authWithOAuthPopup", 2, 3, arguments.length);
    Yf("Firebase.authWithOAuthPopup", 1, a);
    A("Firebase.authWithOAuthPopup", 2, b, !1);
    Zf("Firebase.authWithOAuthPopup", 3, c, !0);
    Lg(this.k.P, a, c, b);
  };
  T.prototype.authWithOAuthPopup = T.prototype.Tf;
  T.prototype.Uf = function(a, b, c) {
    y("Firebase.authWithOAuthRedirect", 2, 3, arguments.length);
    Yf("Firebase.authWithOAuthRedirect", 1, a);
    A("Firebase.authWithOAuthRedirect", 2, b, !1);
    Zf("Firebase.authWithOAuthRedirect", 3, c, !0);
    var d = this.k.P;
    Jg(d);
    var e = [sg],
        f = gg(c);
    "anonymous" === a || "firebase" === a ? Q(b, U("TRANSPORT_UNAVAILABLE")) : (Bc.set("redirect_client_options", f.kd), Kg(d, e, "/auth/" + a, f, b));
  };
  T.prototype.authWithOAuthRedirect = T.prototype.Uf;
  T.prototype.Vf = function(a, b, c, d) {
    y("Firebase.authWithOAuthToken", 3, 4, arguments.length);
    Yf("Firebase.authWithOAuthToken", 1, a);
    A("Firebase.authWithOAuthToken", 3, c, !1);
    Zf("Firebase.authWithOAuthToken", 4, d, !0);
    p(b) ? (Yf("Firebase.authWithOAuthToken", 2, b), Ig(this.k.P, a + "/token", {access_token: b}, d, c)) : (Zf("Firebase.authWithOAuthToken", 2, b, !1), Ig(this.k.P, a + "/token", b, d, c));
  };
  T.prototype.authWithOAuthToken = T.prototype.Vf;
  T.prototype.Rf = function(a, b) {
    y("Firebase.authAnonymously", 1, 2, arguments.length);
    A("Firebase.authAnonymously", 1, a, !1);
    Zf("Firebase.authAnonymously", 2, b, !0);
    Ig(this.k.P, "anonymous", {}, b, a);
  };
  T.prototype.authAnonymously = T.prototype.Rf;
  T.prototype.Wf = function(a, b, c) {
    y("Firebase.authWithPassword", 2, 3, arguments.length);
    Zf("Firebase.authWithPassword", 1, a, !1);
    $f("Firebase.authWithPassword", a, "email");
    $f("Firebase.authWithPassword", a, "password");
    A("Firebase.authAnonymously", 2, b, !1);
    Zf("Firebase.authAnonymously", 3, c, !0);
    Ig(this.k.P, "password", a, c, b);
  };
  T.prototype.authWithPassword = T.prototype.Wf;
  T.prototype.oe = function(a, b) {
    y("Firebase.createUser", 2, 2, arguments.length);
    Zf("Firebase.createUser", 1, a, !1);
    $f("Firebase.createUser", a, "email");
    $f("Firebase.createUser", a, "password");
    A("Firebase.createUser", 2, b, !1);
    this.k.P.oe(a, b);
  };
  T.prototype.createUser = T.prototype.oe;
  T.prototype.Oe = function(a, b) {
    y("Firebase.removeUser", 2, 2, arguments.length);
    Zf("Firebase.removeUser", 1, a, !1);
    $f("Firebase.removeUser", a, "email");
    $f("Firebase.removeUser", a, "password");
    A("Firebase.removeUser", 2, b, !1);
    this.k.P.Oe(a, b);
  };
  T.prototype.removeUser = T.prototype.Oe;
  T.prototype.le = function(a, b) {
    y("Firebase.changePassword", 2, 2, arguments.length);
    Zf("Firebase.changePassword", 1, a, !1);
    $f("Firebase.changePassword", a, "email");
    $f("Firebase.changePassword", a, "oldPassword");
    $f("Firebase.changePassword", a, "newPassword");
    A("Firebase.changePassword", 2, b, !1);
    this.k.P.le(a, b);
  };
  T.prototype.changePassword = T.prototype.le;
  T.prototype.ke = function(a, b) {
    y("Firebase.changeEmail", 2, 2, arguments.length);
    Zf("Firebase.changeEmail", 1, a, !1);
    $f("Firebase.changeEmail", a, "oldEmail");
    $f("Firebase.changeEmail", a, "newEmail");
    $f("Firebase.changeEmail", a, "password");
    A("Firebase.changeEmail", 2, b, !1);
    this.k.P.ke(a, b);
  };
  T.prototype.changeEmail = T.prototype.ke;
  T.prototype.Pe = function(a, b) {
    y("Firebase.resetPassword", 2, 2, arguments.length);
    Zf("Firebase.resetPassword", 1, a, !1);
    $f("Firebase.resetPassword", a, "email");
    A("Firebase.resetPassword", 2, b, !1);
    this.k.P.Pe(a, b);
  };
  T.prototype.resetPassword = T.prototype.Pe;
  T.goOffline = function() {
    y("Firebase.goOffline", 0, 0, arguments.length);
    W.Vb().ub();
  };
  T.goOnline = function() {
    y("Firebase.goOnline", 0, 0, arguments.length);
    W.Vb().pc();
  };
  function Lc(a, b) {
    I(!b || !0 === a || !1 === a, "Can't turn on custom loggers persistently.");
    !0 === a ? ("undefined" !== typeof console && ("function" === typeof console.log ? xb = q(console.log, console) : "object" === typeof console.log && (xb = function(a) {
      console.log(a);
    })), b && Bc.set("logging_enabled", !0)) : a ? xb = a : (xb = null, Bc.remove("logging_enabled"));
  }
  T.enableLogging = Lc;
  T.ServerValue = {TIMESTAMP: {".sv": "timestamp"}};
  T.SDK_VERSION = "2.2.2";
  T.INTERNAL = V;
  T.Context = W;
  T.TEST_ACCESS = Z;
})(require("buffer").Buffer, require("process"));
