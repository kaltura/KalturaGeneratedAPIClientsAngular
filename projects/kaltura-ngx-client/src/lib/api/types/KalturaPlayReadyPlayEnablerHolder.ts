
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayReadyPlayEnablerType } from './KalturaPlayReadyPlayEnablerType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlayReadyPlayEnablerHolderArgs  extends KalturaObjectBaseArgs {
    type? : KalturaPlayReadyPlayEnablerType;
}


export class KalturaPlayReadyPlayEnablerHolder extends KalturaObjectBase {

    type : KalturaPlayReadyPlayEnablerType;

    constructor(data? : KalturaPlayReadyPlayEnablerHolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyPlayEnablerHolder' },
				type : { type : 'es', subTypeConstructor : KalturaPlayReadyPlayEnablerType, subType : 'KalturaPlayReadyPlayEnablerType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlayReadyPlayEnablerHolder'] = KalturaPlayReadyPlayEnablerHolder;