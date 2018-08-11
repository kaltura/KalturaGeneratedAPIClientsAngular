
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIntegrationJobTriggerDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaIntegrationJobTriggerData extends KalturaObjectBase {

    

    constructor(data? : KalturaIntegrationJobTriggerDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIntegrationJobTriggerData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIntegrationJobTriggerData'] = KalturaIntegrationJobTriggerData;