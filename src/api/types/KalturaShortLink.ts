
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaShortLinkStatus } from './KalturaShortLinkStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaShortLinkArgs  extends KalturaObjectBaseArgs {
    expiresAt? : number;
	userId? : string;
	name? : string;
	systemName? : string;
	fullUrl? : string;
	status? : KalturaShortLinkStatus;
}


export class KalturaShortLink extends KalturaObjectBase {

    readonly id : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	expiresAt : number;
	readonly partnerId : number;
	userId : string;
	name : string;
	systemName : string;
	fullUrl : string;
	status : KalturaShortLinkStatus;

    constructor(data? : KalturaShortLinkArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaShortLink' },
				id : { type : 's', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				expiresAt : { type : 'n' },
				partnerId : { type : 'n', readOnly : true },
				userId : { type : 's' },
				name : { type : 's' },
				systemName : { type : 's' },
				fullUrl : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaShortLinkStatus, subType : 'KalturaShortLinkStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaShortLink',KalturaShortLink);
