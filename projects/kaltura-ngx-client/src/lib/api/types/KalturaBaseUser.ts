
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserStatus } from './KalturaUserStatus';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaUserMode } from './KalturaUserMode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseUserArgs  extends KalturaObjectBaseArgs {
    id? : string;
	screenName? : string;
	fullName? : string;
	email? : string;
	country? : string;
	state? : string;
	city? : string;
	zip? : string;
	thumbnailUrl? : string;
	description? : string;
	tags? : string;
	adminTags? : string;
	status? : KalturaUserStatus;
	partnerData? : string;
	indexedPartnerDataInt? : number;
	indexedPartnerDataString? : string;
	language? : KalturaLanguageCode;
	allowedPartnerIds? : string;
	allowedPartnerPackages? : string;
	userMode? : KalturaUserMode;
}


export class KalturaBaseUser extends KalturaObjectBase {

    id : string;
	readonly partnerId : number;
	screenName : string;
	fullName : string;
	email : string;
	country : string;
	state : string;
	city : string;
	zip : string;
	thumbnailUrl : string;
	description : string;
	tags : string;
	adminTags : string;
	status : KalturaUserStatus;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	partnerData : string;
	indexedPartnerDataInt : number;
	indexedPartnerDataString : string;
	readonly storageSize : number;
	language : KalturaLanguageCode;
	readonly lastLoginTime : number;
	readonly statusUpdatedAt : number;
	readonly deletedAt : Date;
	allowedPartnerIds : string;
	allowedPartnerPackages : string;
	userMode : KalturaUserMode;

    constructor(data? : KalturaBaseUserArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseUser' },
				id : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				screenName : { type : 's' },
				fullName : { type : 's' },
				email : { type : 's' },
				country : { type : 's' },
				state : { type : 's' },
				city : { type : 's' },
				zip : { type : 's' },
				thumbnailUrl : { type : 's' },
				description : { type : 's' },
				tags : { type : 's' },
				adminTags : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaUserStatus, subType : 'KalturaUserStatus' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				partnerData : { type : 's' },
				indexedPartnerDataInt : { type : 'n' },
				indexedPartnerDataString : { type : 's' },
				storageSize : { type : 'n', readOnly : true },
				language : { type : 'es', subTypeConstructor : KalturaLanguageCode, subType : 'KalturaLanguageCode' },
				lastLoginTime : { type : 'n', readOnly : true },
				statusUpdatedAt : { type : 'n', readOnly : true },
				deletedAt : { type : 'd', readOnly : true },
				allowedPartnerIds : { type : 's' },
				allowedPartnerPackages : { type : 's' },
				userMode : { type : 'en', subTypeConstructor : KalturaUserMode, subType : 'KalturaUserMode' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseUser'] = KalturaBaseUser;