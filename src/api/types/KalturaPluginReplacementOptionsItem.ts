
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPluginReplacementOptionsItemArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaPluginReplacementOptionsItem extends KalturaObjectBase {

    

    constructor(data? : KalturaPluginReplacementOptionsItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPluginReplacementOptionsItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPluginReplacementOptionsItem',KalturaPluginReplacementOptionsItem);
