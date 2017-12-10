
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectIdentifier } from './KalturaObjectIdentifier';
import { KalturaMrssExtensionMode } from './KalturaMrssExtensionMode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaExtendingItemMrssParameterArgs  extends KalturaObjectBaseArgs {
    xpath? : string;
	identifier? : KalturaObjectIdentifier;
	extensionMode? : KalturaMrssExtensionMode;
}


export class KalturaExtendingItemMrssParameter extends KalturaObjectBase {

    xpath : string;
	identifier : KalturaObjectIdentifier;
	extensionMode : KalturaMrssExtensionMode;

    constructor(data? : KalturaExtendingItemMrssParameterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExtendingItemMrssParameter' },
				xpath : { type : 's' },
				identifier : { type : 'o', subTypeConstructor : KalturaObjectIdentifier, subType : 'KalturaObjectIdentifier' },
				extensionMode : { type : 'en', subTypeConstructor : KalturaMrssExtensionMode, subType : 'KalturaMrssExtensionMode' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExtendingItemMrssParameter',KalturaExtendingItemMrssParameter);
