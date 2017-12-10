
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDistributionProfileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaDistributionProfileListResponse extends KalturaListResponse {

    readonly objects : KalturaDistributionProfile[];

    constructor(data? : KalturaDistributionProfileListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionProfileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaDistributionProfile, subType : 'KalturaDistributionProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionProfileListResponse',KalturaDistributionProfileListResponse);
