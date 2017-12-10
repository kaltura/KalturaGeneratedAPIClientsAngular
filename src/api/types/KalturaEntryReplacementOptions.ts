
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPluginReplacementOptionsItem } from './KalturaPluginReplacementOptionsItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEntryReplacementOptionsArgs  extends KalturaObjectBaseArgs {
    keepManualThumbnails? : number;
	pluginOptionItems? : KalturaPluginReplacementOptionsItem[];
}


export class KalturaEntryReplacementOptions extends KalturaObjectBase {

    keepManualThumbnails : number;
	pluginOptionItems : KalturaPluginReplacementOptionsItem[];

    constructor(data? : KalturaEntryReplacementOptionsArgs)
    {
        super(data);
        if (typeof this.pluginOptionItems === 'undefined') this.pluginOptionItems = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryReplacementOptions' },
				keepManualThumbnails : { type : 'n' },
				pluginOptionItems : { type : 'a', subTypeConstructor : KalturaPluginReplacementOptionsItem, subType : 'KalturaPluginReplacementOptionsItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryReplacementOptions',KalturaEntryReplacementOptions);
