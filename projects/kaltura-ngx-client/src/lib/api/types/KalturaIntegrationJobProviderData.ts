
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIntegrationJobProviderDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaIntegrationJobProviderData extends KalturaObjectBase {

    

    constructor(data? : KalturaIntegrationJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIntegrationJobProviderData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIntegrationJobProviderData'] = KalturaIntegrationJobProviderData;