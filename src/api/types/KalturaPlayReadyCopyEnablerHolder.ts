
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlayReadyCopyEnablerType } from './KalturaPlayReadyCopyEnablerType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlayReadyCopyEnablerHolderArgs  extends KalturaObjectBaseArgs {
    type? : KalturaPlayReadyCopyEnablerType;
}


export class KalturaPlayReadyCopyEnablerHolder extends KalturaObjectBase {

    type : KalturaPlayReadyCopyEnablerType;

    constructor(data? : KalturaPlayReadyCopyEnablerHolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyCopyEnablerHolder' },
				type : { type : 'es', subTypeConstructor : KalturaPlayReadyCopyEnablerType, subType : 'KalturaPlayReadyCopyEnablerType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayReadyCopyEnablerHolder',KalturaPlayReadyCopyEnablerHolder);
