
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDistributionProvider } from './KalturaGenericDistributionProvider';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaGenericDistributionProviderListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaGenericDistributionProviderListResponse extends KalturaListResponse {

    readonly objects : KalturaGenericDistributionProvider[];

    constructor(data? : KalturaGenericDistributionProviderListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaGenericDistributionProviderListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaGenericDistributionProvider, subType : 'KalturaGenericDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenericDistributionProviderListResponse'] = KalturaGenericDistributionProviderListResponse;