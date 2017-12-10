

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMailType extends KalturaObjectBase {
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

    static mailTypeAccountReactiveConfirm = new KalturaMailType('86');
	static mailTypeAccountUpgradeConfirm = new KalturaMailType('80');
	static mailTypeAddedKalturaToHisFavorites = new KalturaMailType('32');
	static mailTypeAddedKalturaToHisFavoritesSubscribed = new KalturaMailType('42');
	static mailTypeAddedKalturaToYourFavorites = new KalturaMailType('23');
	static mailTypeAddedToClipFavorites = new KalturaMailType('12');
	static mailTypeAddedToFavorites = new KalturaMailType('11');
	static mailTypeBulkuploadAborted = new KalturaMailType('66');
	static mailTypeBulkuploadFailed = new KalturaMailType('65');
	static mailTypeBulkuploadFinished = new KalturaMailType('64');
	static mailTypeBulkDownloadReady = new KalturaMailType('63');
	static mailTypeClipAdded = new KalturaMailType('30');
	static mailTypeClipAddedYourKaltura = new KalturaMailType('20');
	static mailTypeClipContributed = new KalturaMailType('40');
	static mailTypeKalturaNewsletter = new KalturaMailType('10');
	static mailTypeLiveReportExportAbort = new KalturaMailType('132');
	static mailTypeLiveReportExportFailure = new KalturaMailType('131');
	static mailTypeLiveReportExportSuccess = new KalturaMailType('130');
	static mailTypeLoginMailReset = new KalturaMailType('52');
	static mailTypeNewCommentInKaltura = new KalturaMailType('24');
	static mailTypeNewCommentInKalturaYouContributed = new KalturaMailType('33');
	static mailTypeNewCommentInKalturaYouSubscribed = new KalturaMailType('43');
	static mailTypeNewCommentInProfile = new KalturaMailType('13');
	static mailTypeNotifyErr = new KalturaMailType('70');
	static mailTypePasswordReset = new KalturaMailType('51');
	static mailTypeRegisterConfirm = new KalturaMailType('50');
	static mailTypeRegisterConfirmVideoService = new KalturaMailType('54');
	static mailTypeRoughcutCreated = new KalturaMailType('22');
	static mailTypeRoughcutCreatedSubscribed = new KalturaMailType('41');
	static mailTypeSystemUserCredentialsSaved = new KalturaMailType('113');
	static mailTypeSystemUserNewPassword = new KalturaMailType('112');
	static mailTypeSystemUserResetPassword = new KalturaMailType('110');
	static mailTypeSystemUserResetPasswordSuccess = new KalturaMailType('111');
	static mailTypeVideoAdded = new KalturaMailType('21');
	static mailTypeVideoCreated = new KalturaMailType('31');
	static mailTypeVideoIsReady = new KalturaMailType('62');
	static mailTypeVideoReady = new KalturaMailType('60');
	static mailTypeVideoServiceNotice = new KalturaMailType('81');
	static mailTypeVideoServiceNoticeAccountDeleted = new KalturaMailType('84');
	static mailTypeVideoServiceNoticeAccountLocked = new KalturaMailType('83');
	static mailTypeVideoServiceNoticeLimitReached = new KalturaMailType('82');
	static mailTypeVideoServiceNoticeUpgradeOffer = new KalturaMailType('85');
}
KalturaTypesFactory.registerType('KalturaMailType',KalturaMailType);