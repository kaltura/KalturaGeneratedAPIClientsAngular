
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaIntegrationJobTriggerData',KalturaIntegrationJobTriggerData);
