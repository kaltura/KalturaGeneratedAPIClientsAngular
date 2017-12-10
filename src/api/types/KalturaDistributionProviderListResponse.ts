
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider } from './KalturaDistributionProvider';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDistributionProviderListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaDistributionProviderListResponse extends KalturaListResponse {

    readonly objects : KalturaDistributionProvider[];

    constructor(data? : KalturaDistributionProviderListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDistributionProviderListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaDistributionProvider, subType : 'KalturaDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionProviderListResponse',KalturaDistributionProviderListResponse);
