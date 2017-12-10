
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserType } from './KalturaUserType';
import { KalturaGender } from './KalturaGender';
import { KalturaUserStatus } from './KalturaUserStatus';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserArgs  extends KalturaObjectBaseArgs {
    id? : string;
	type? : KalturaUserType;
	screenName? : string;
	fullName? : string;
	email? : string;
	dateOfBirth? : number;
	country? : string;
	state? : string;
	city? : string;
	zip? : string;
	thumbnailUrl? : string;
	description? : string;
	tags? : string;
	adminTags? : string;
	gender? : KalturaGender;
	status? : KalturaUserStatus;
	partnerData? : string;
	indexedPartnerDataInt? : number;
	indexedPartnerDataString? : string;
	password? : string;
	firstName? : string;
	lastName? : string;
	isAdmin? : boolean;
	language? : KalturaLanguageCode;
	loginEnabled? : boolean;
	roleIds? : string;
	isAccountOwner? : boolean;
	allowedPartnerIds? : string;
	allowedPartnerPackages? : string;
}


export class KalturaUser extends KalturaObjectBase {

    id : string;
	readonly partnerId : number;
	type : KalturaUserType;
	screenName : string;
	fullName : string;
	email : string;
	dateOfBirth : number;
	country : string;
	state : string;
	city : string;
	zip : string;
	thumbnailUrl : string;
	description : string;
	tags : string;
	adminTags : string;
	gender : KalturaGender;
	status : KalturaUserStatus;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	partnerData : string;
	indexedPartnerDataInt : number;
	indexedPartnerDataString : string;
	readonly storageSize : number;
	password : string;
	firstName : string;
	lastName : string;
	isAdmin : boolean;
	language : KalturaLanguageCode;
	readonly lastLoginTime : number;
	readonly statusUpdatedAt : number;
	readonly deletedAt : Date;
	loginEnabled : boolean;
	roleIds : string;
	readonly roleNames : string;
	isAccountOwner : boolean;
	allowedPartnerIds : string;
	allowedPartnerPackages : string;

    constructor(data? : KalturaUserArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUser' },
				id : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				type : { type : 'en', subTypeConstructor : KalturaUserType, subType : 'KalturaUserType' },
				screenName : { type : 's' },
				fullName : { type : 's' },
				email : { type : 's' },
				dateOfBirth : { type : 'n' },
				country : { type : 's' },
				state : { type : 's' },
				city : { type : 's' },
				zip : { type : 's' },
				thumbnailUrl : { type : 's' },
				description : { type : 's' },
				tags : { type : 's' },
				adminTags : { type : 's' },
				gender : { type : 'en', subTypeConstructor : KalturaGender, subType : 'KalturaGender' },
				status : { type : 'en', subTypeConstructor : KalturaUserStatus, subType : 'KalturaUserStatus' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				partnerData : { type : 's' },
				indexedPartnerDataInt : { type : 'n' },
				indexedPartnerDataString : { type : 's' },
				storageSize : { type : 'n', readOnly : true },
				password : { type : 's' },
				firstName : { type : 's' },
				lastName : { type : 's' },
				isAdmin : { type : 'b' },
				language : { type : 'es', subTypeConstructor : KalturaLanguageCode, subType : 'KalturaLanguageCode' },
				lastLoginTime : { type : 'n', readOnly : true },
				statusUpdatedAt : { type : 'n', readOnly : true },
				deletedAt : { type : 'd', readOnly : true },
				loginEnabled : { type : 'b' },
				roleIds : { type : 's' },
				roleNames : { type : 's', readOnly : true },
				isAccountOwner : { type : 'b' },
				allowedPartnerIds : { type : 's' },
				allowedPartnerPackages : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUser',KalturaUser);
