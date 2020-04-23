
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSsoStatus } from './KalturaSsoStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSsoArgs  extends KalturaObjectBaseArgs {
    applicationType? : string;
	partnerId? : number;
	domain? : string;
	status? : KalturaSsoStatus;
	redirectUrl? : string;
	data? : string;
}


export class KalturaSso extends KalturaObjectBase {

    readonly id : number;
	applicationType : string;
	partnerId : number;
	domain : string;
	status : KalturaSsoStatus;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	redirectUrl : string;
	data : string;

    constructor(data? : KalturaSsoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSso' },
				id : { type : 'n', readOnly : true },
				applicationType : { type : 's' },
				partnerId : { type : 'n' },
				domain : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaSsoStatus, subType : 'KalturaSsoStatus' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				redirectUrl : { type : 's' },
				data : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSso'] = KalturaSso;