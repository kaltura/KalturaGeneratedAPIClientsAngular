
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAppTokenStatus } from './KalturaAppTokenStatus';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaAppTokenHashType } from './KalturaAppTokenHashType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAppTokenArgs  extends KalturaObjectBaseArgs {
    expiry? : number;
	sessionType? : KalturaSessionType;
	sessionUserId? : string;
	sessionDuration? : number;
	sessionPrivileges? : string;
	hashType? : KalturaAppTokenHashType;
	description? : string;
}


export class KalturaAppToken extends KalturaObjectBase {

    readonly id : string;
	readonly token : string;
	readonly partnerId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly status : KalturaAppTokenStatus;
	expiry : number;
	sessionType : KalturaSessionType;
	sessionUserId : string;
	sessionDuration : number;
	sessionPrivileges : string;
	hashType : KalturaAppTokenHashType;
	description : string;

    constructor(data? : KalturaAppTokenArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAppToken' },
				id : { type : 's', readOnly : true },
				token : { type : 's', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaAppTokenStatus, subType : 'KalturaAppTokenStatus' },
				expiry : { type : 'n' },
				sessionType : { type : 'en', subTypeConstructor : KalturaSessionType, subType : 'KalturaSessionType' },
				sessionUserId : { type : 's' },
				sessionDuration : { type : 'n' },
				sessionPrivileges : { type : 's' },
				hashType : { type : 'es', subTypeConstructor : KalturaAppTokenHashType, subType : 'KalturaAppTokenHashType' },
				description : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAppToken',KalturaAppToken);
