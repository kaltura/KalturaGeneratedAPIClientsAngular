
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlayReadyAnalogVideoOPId } from './KalturaPlayReadyAnalogVideoOPId';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlayReadyAnalogVideoOPIdHolderArgs  extends KalturaObjectBaseArgs {
    type? : KalturaPlayReadyAnalogVideoOPId;
}


export class KalturaPlayReadyAnalogVideoOPIdHolder extends KalturaObjectBase {

    type : KalturaPlayReadyAnalogVideoOPId;

    constructor(data? : KalturaPlayReadyAnalogVideoOPIdHolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyAnalogVideoOPIdHolder' },
				type : { type : 'es', subTypeConstructor : KalturaPlayReadyAnalogVideoOPId, subType : 'KalturaPlayReadyAnalogVideoOPId' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayReadyAnalogVideoOPIdHolder',KalturaPlayReadyAnalogVideoOPIdHolder);
