
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEffectType } from './KalturaEffectType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEffectArgs  extends KalturaObjectBaseArgs {
    effectType? : KalturaEffectType;
	value? : string;
}


export class KalturaEffect extends KalturaObjectBase {

    effectType : KalturaEffectType;
	value : string;

    constructor(data? : KalturaEffectArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEffect' },
				effectType : { type : 'en', subTypeConstructor : KalturaEffectType, subType : 'KalturaEffectType' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEffect'] = KalturaEffect;