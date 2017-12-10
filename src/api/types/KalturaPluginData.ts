
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPluginDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaPluginData extends KalturaObjectBase {

    

    constructor(data? : KalturaPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPluginData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPluginData',KalturaPluginData);
