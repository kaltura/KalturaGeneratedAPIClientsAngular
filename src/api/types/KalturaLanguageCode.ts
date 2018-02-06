

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLanguageCode extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static aa = new KalturaLanguageCode('aa');
	static ab = new KalturaLanguageCode('ab');
	static af = new KalturaLanguageCode('af');
	static am = new KalturaLanguageCode('am');
	static ar = new KalturaLanguageCode('ar');
	static as = new KalturaLanguageCode('as');
	static ay = new KalturaLanguageCode('ay');
	static az = new KalturaLanguageCode('az');
	static ba = new KalturaLanguageCode('ba');
	static be = new KalturaLanguageCode('be');
	static bg = new KalturaLanguageCode('bg');
	static bh = new KalturaLanguageCode('bh');
	static bi = new KalturaLanguageCode('bi');
	static bn = new KalturaLanguageCode('bn');
	static bo = new KalturaLanguageCode('bo');
	static br = new KalturaLanguageCode('br');
	static ca = new KalturaLanguageCode('ca');
	static co = new KalturaLanguageCode('co');
	static cs = new KalturaLanguageCode('cs');
	static cy = new KalturaLanguageCode('cy');
	static da = new KalturaLanguageCode('da');
	static de = new KalturaLanguageCode('de');
	static dz = new KalturaLanguageCode('dz');
	static el = new KalturaLanguageCode('el');
	static en = new KalturaLanguageCode('en');
	static enGb = new KalturaLanguageCode('en_gb');
	static enUs = new KalturaLanguageCode('en_us');
	static eo = new KalturaLanguageCode('eo');
	static es = new KalturaLanguageCode('es');
	static et = new KalturaLanguageCode('et');
	static eu = new KalturaLanguageCode('eu');
	static fa = new KalturaLanguageCode('fa');
	static fi = new KalturaLanguageCode('fi');
	static fj = new KalturaLanguageCode('fj');
	static fo = new KalturaLanguageCode('fo');
	static fr = new KalturaLanguageCode('fr');
	static fy = new KalturaLanguageCode('fy');
	static ga = new KalturaLanguageCode('ga');
	static gd = new KalturaLanguageCode('gd');
	static gl = new KalturaLanguageCode('gl');
	static gn = new KalturaLanguageCode('gn');
	static gu = new KalturaLanguageCode('gu');
	static gv = new KalturaLanguageCode('gv');
	static ha = new KalturaLanguageCode('ha');
	static he = new KalturaLanguageCode('he');
	static hi = new KalturaLanguageCode('hi');
	static hr = new KalturaLanguageCode('hr');
	static hu = new KalturaLanguageCode('hu');
	static hy = new KalturaLanguageCode('hy');
	static ia = new KalturaLanguageCode('ia');
	static id = new KalturaLanguageCode('id');
	static ie = new KalturaLanguageCode('ie');
	static ik = new KalturaLanguageCode('ik');
	static in = new KalturaLanguageCode('in');
	static is = new KalturaLanguageCode('is');
	static it = new KalturaLanguageCode('it');
	static iu = new KalturaLanguageCode('iu');
	static iw = new KalturaLanguageCode('iw');
	static ja = new KalturaLanguageCode('ja');
	static ji = new KalturaLanguageCode('ji');
	static jv = new KalturaLanguageCode('jv');
	static ka = new KalturaLanguageCode('ka');
	static kk = new KalturaLanguageCode('kk');
	static kl = new KalturaLanguageCode('kl');
	static km = new KalturaLanguageCode('km');
	static kn = new KalturaLanguageCode('kn');
	static ko = new KalturaLanguageCode('ko');
	static ks = new KalturaLanguageCode('ks');
	static ku = new KalturaLanguageCode('ku');
	static ky = new KalturaLanguageCode('ky');
	static la = new KalturaLanguageCode('la');
	static li = new KalturaLanguageCode('li');
	static ln = new KalturaLanguageCode('ln');
	static lo = new KalturaLanguageCode('lo');
	static lt = new KalturaLanguageCode('lt');
	static lv = new KalturaLanguageCode('lv');
	static mg = new KalturaLanguageCode('mg');
	static mi = new KalturaLanguageCode('mi');
	static mk = new KalturaLanguageCode('mk');
	static ml = new KalturaLanguageCode('ml');
	static mn = new KalturaLanguageCode('mn');
	static mo = new KalturaLanguageCode('mo');
	static mr = new KalturaLanguageCode('mr');
	static ms = new KalturaLanguageCode('ms');
	static mt = new KalturaLanguageCode('mt');
	static mu = new KalturaLanguageCode('multilingual');
	static my = new KalturaLanguageCode('my');
	static na = new KalturaLanguageCode('na');
	static ne = new KalturaLanguageCode('ne');
	static nl = new KalturaLanguageCode('nl');
	static no = new KalturaLanguageCode('no');
	static oc = new KalturaLanguageCode('oc');
	static om = new KalturaLanguageCode('om');
	static or = new KalturaLanguageCode('or');
	static pa = new KalturaLanguageCode('pa');
	static pl = new KalturaLanguageCode('pl');
	static ps = new KalturaLanguageCode('ps');
	static pt = new KalturaLanguageCode('pt');
	static qu = new KalturaLanguageCode('qu');
	static rm = new KalturaLanguageCode('rm');
	static rn = new KalturaLanguageCode('rn');
	static ro = new KalturaLanguageCode('ro');
	static ru = new KalturaLanguageCode('ru');
	static rw = new KalturaLanguageCode('rw');
	static sa = new KalturaLanguageCode('sa');
	static sd = new KalturaLanguageCode('sd');
	static sg = new KalturaLanguageCode('sg');
	static sh = new KalturaLanguageCode('sh');
	static si = new KalturaLanguageCode('si');
	static sk = new KalturaLanguageCode('sk');
	static sl = new KalturaLanguageCode('sl');
	static sm = new KalturaLanguageCode('sm');
	static sn = new KalturaLanguageCode('sn');
	static so = new KalturaLanguageCode('so');
	static sq = new KalturaLanguageCode('sq');
	static sr = new KalturaLanguageCode('sr');
	static ss = new KalturaLanguageCode('ss');
	static st = new KalturaLanguageCode('st');
	static su = new KalturaLanguageCode('su');
	static sv = new KalturaLanguageCode('sv');
	static sw = new KalturaLanguageCode('sw');
	static ta = new KalturaLanguageCode('ta');
	static te = new KalturaLanguageCode('te');
	static tg = new KalturaLanguageCode('tg');
	static th = new KalturaLanguageCode('th');
	static ti = new KalturaLanguageCode('ti');
	static tk = new KalturaLanguageCode('tk');
	static tl = new KalturaLanguageCode('tl');
	static tn = new KalturaLanguageCode('tn');
	static to = new KalturaLanguageCode('to');
	static tr = new KalturaLanguageCode('tr');
	static ts = new KalturaLanguageCode('ts');
	static tt = new KalturaLanguageCode('tt');
	static tw = new KalturaLanguageCode('tw');
	static ug = new KalturaLanguageCode('ug');
	static uk = new KalturaLanguageCode('uk');
	static ur = new KalturaLanguageCode('ur');
	static uz = new KalturaLanguageCode('uz');
	static vi = new KalturaLanguageCode('vi');
	static vo = new KalturaLanguageCode('vo');
	static wo = new KalturaLanguageCode('wo');
	static xh = new KalturaLanguageCode('xh');
	static yi = new KalturaLanguageCode('yi');
	static yo = new KalturaLanguageCode('yo');
	static zh = new KalturaLanguageCode('zh');
	static zhHans = new KalturaLanguageCode('zh_s');
	static zhHant = new KalturaLanguageCode('zh_t');
	static zu = new KalturaLanguageCode('zu');
}
KalturaTypesFactory.registerType('KalturaLanguageCode',KalturaLanguageCode);