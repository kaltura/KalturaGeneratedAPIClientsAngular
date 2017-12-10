
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCommercialUseType } from './KalturaCommercialUseType';
import { KalturaPartnerType } from './KalturaPartnerType';
import { KalturaPartnerStatus } from './KalturaPartnerStatus';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaPartnerGroupType } from './KalturaPartnerGroupType';
import { KalturaPlayerDeliveryType } from './KalturaPlayerDeliveryType';
import { KalturaPlayerEmbedCodeType } from './KalturaPlayerEmbedCodeType';
import { KalturaESearchLanguageItem } from './KalturaESearchLanguageItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPartnerArgs  extends KalturaObjectBaseArgs {
    name? : string;
	website? : string;
	notificationUrl? : string;
	appearInSearch? : number;
	adminName? : string;
	adminEmail? : string;
	description? : string;
	commercialUse? : KalturaCommercialUseType;
	landingPage? : string;
	userLandingPage? : string;
	contentCategories? : string;
	type? : KalturaPartnerType;
	phone? : string;
	describeYourself? : string;
	adultContent? : boolean;
	defConversionProfileType? : string;
	notify? : number;
	allowQuickEdit? : number;
	mergeEntryLists? : number;
	notificationsConfig? : string;
	maxUploadSize? : number;
	partnerPackage? : number;
	allowMultiNotification? : number;
	adminUserId? : string;
	firstName? : string;
	lastName? : string;
	country? : string;
	state? : string;
	additionalParams? : KalturaKeyValue[];
	partnerParentId? : number;
	referenceId? : string;
	eSearchLanguages? : KalturaESearchLanguageItem[];
}


export class KalturaPartner extends KalturaObjectBase {

    readonly id : number;
	name : string;
	website : string;
	notificationUrl : string;
	appearInSearch : number;
	readonly createdAt : Date;
	adminName : string;
	adminEmail : string;
	description : string;
	commercialUse : KalturaCommercialUseType;
	landingPage : string;
	userLandingPage : string;
	contentCategories : string;
	type : KalturaPartnerType;
	phone : string;
	describeYourself : string;
	adultContent : boolean;
	defConversionProfileType : string;
	notify : number;
	readonly status : KalturaPartnerStatus;
	allowQuickEdit : number;
	mergeEntryLists : number;
	notificationsConfig : string;
	maxUploadSize : number;
	partnerPackage : number;
	readonly secret : string;
	readonly adminSecret : string;
	readonly cmsPassword : string;
	allowMultiNotification : number;
	readonly adminLoginUsersQuota : number;
	adminUserId : string;
	firstName : string;
	lastName : string;
	country : string;
	state : string;
	additionalParams : KalturaKeyValue[];
	readonly publishersQuota : number;
	readonly partnerGroupType : KalturaPartnerGroupType;
	readonly defaultEntitlementEnforcement : boolean;
	readonly defaultDeliveryType : string;
	readonly defaultEmbedCodeType : string;
	readonly deliveryTypes : KalturaPlayerDeliveryType[];
	readonly embedCodeTypes : KalturaPlayerEmbedCodeType[];
	readonly templatePartnerId : number;
	readonly ignoreSeoLinks : boolean;
	readonly host : string;
	readonly cdnHost : string;
	readonly isFirstLogin : boolean;
	readonly logoutUrl : string;
	partnerParentId : number;
	readonly crmId : string;
	referenceId : string;
	readonly timeAlignedRenditions : boolean;
	eSearchLanguages : KalturaESearchLanguageItem[];

    constructor(data? : KalturaPartnerArgs)
    {
        super(data);
        if (typeof this.additionalParams === 'undefined') this.additionalParams = [];
		if (typeof this.deliveryTypes === 'undefined') this.deliveryTypes = [];
		if (typeof this.embedCodeTypes === 'undefined') this.embedCodeTypes = [];
		if (typeof this.eSearchLanguages === 'undefined') this.eSearchLanguages = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartner' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				website : { type : 's' },
				notificationUrl : { type : 's' },
				appearInSearch : { type : 'n' },
				createdAt : { type : 'd', readOnly : true },
				adminName : { type : 's' },
				adminEmail : { type : 's' },
				description : { type : 's' },
				commercialUse : { type : 'en', subTypeConstructor : KalturaCommercialUseType, subType : 'KalturaCommercialUseType' },
				landingPage : { type : 's' },
				userLandingPage : { type : 's' },
				contentCategories : { type : 's' },
				type : { type : 'en', subTypeConstructor : KalturaPartnerType, subType : 'KalturaPartnerType' },
				phone : { type : 's' },
				describeYourself : { type : 's' },
				adultContent : { type : 'b' },
				defConversionProfileType : { type : 's' },
				notify : { type : 'n' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaPartnerStatus, subType : 'KalturaPartnerStatus' },
				allowQuickEdit : { type : 'n' },
				mergeEntryLists : { type : 'n' },
				notificationsConfig : { type : 's' },
				maxUploadSize : { type : 'n' },
				partnerPackage : { type : 'n' },
				secret : { type : 's', readOnly : true },
				adminSecret : { type : 's', readOnly : true },
				cmsPassword : { type : 's', readOnly : true },
				allowMultiNotification : { type : 'n' },
				adminLoginUsersQuota : { type : 'n', readOnly : true },
				adminUserId : { type : 's' },
				firstName : { type : 's' },
				lastName : { type : 's' },
				country : { type : 's' },
				state : { type : 's' },
				additionalParams : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				publishersQuota : { type : 'n', readOnly : true },
				partnerGroupType : { type : 'en', readOnly : true, subTypeConstructor : KalturaPartnerGroupType, subType : 'KalturaPartnerGroupType' },
				defaultEntitlementEnforcement : { type : 'b', readOnly : true },
				defaultDeliveryType : { type : 's', readOnly : true },
				defaultEmbedCodeType : { type : 's', readOnly : true },
				deliveryTypes : { type : 'a', readOnly : true, subTypeConstructor : KalturaPlayerDeliveryType, subType : 'KalturaPlayerDeliveryType' },
				embedCodeTypes : { type : 'a', readOnly : true, subTypeConstructor : KalturaPlayerEmbedCodeType, subType : 'KalturaPlayerEmbedCodeType' },
				templatePartnerId : { type : 'n', readOnly : true },
				ignoreSeoLinks : { type : 'b', readOnly : true },
				host : { type : 's', readOnly : true },
				cdnHost : { type : 's', readOnly : true },
				isFirstLogin : { type : 'b', readOnly : true },
				logoutUrl : { type : 's', readOnly : true },
				partnerParentId : { type : 'n' },
				crmId : { type : 's', readOnly : true },
				referenceId : { type : 's' },
				timeAlignedRenditions : { type : 'b', readOnly : true },
				eSearchLanguages : { type : 'a', subTypeConstructor : KalturaESearchLanguageItem, subType : 'KalturaESearchLanguageItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartner',KalturaPartner);
