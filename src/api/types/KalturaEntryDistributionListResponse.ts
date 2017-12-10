
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaEntryDistributionListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaEntryDistributionListResponse extends KalturaListResponse {

    readonly objects : KalturaEntryDistribution[];

    constructor(data? : KalturaEntryDistributionListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaEntryDistributionListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaEntryDistribution, subType : 'KalturaEntryDistribution' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryDistributionListResponse',KalturaEntryDistributionListResponse);
