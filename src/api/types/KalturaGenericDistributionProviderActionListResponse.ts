
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaGenericDistributionProviderActionListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaGenericDistributionProviderActionListResponse extends KalturaListResponse {

    readonly objects : KalturaGenericDistributionProviderAction[];

    constructor(data? : KalturaGenericDistributionProviderActionListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaGenericDistributionProviderActionListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaGenericDistributionProviderAction, subType : 'KalturaGenericDistributionProviderAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenericDistributionProviderActionListResponse',KalturaGenericDistributionProviderActionListResponse);
