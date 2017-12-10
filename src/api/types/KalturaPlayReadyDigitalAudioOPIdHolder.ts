
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlayReadyDigitalAudioOPId } from './KalturaPlayReadyDigitalAudioOPId';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlayReadyDigitalAudioOPIdHolderArgs  extends KalturaObjectBaseArgs {
    type? : KalturaPlayReadyDigitalAudioOPId;
}


export class KalturaPlayReadyDigitalAudioOPIdHolder extends KalturaObjectBase {

    type : KalturaPlayReadyDigitalAudioOPId;

    constructor(data? : KalturaPlayReadyDigitalAudioOPIdHolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyDigitalAudioOPIdHolder' },
				type : { type : 'es', subTypeConstructor : KalturaPlayReadyDigitalAudioOPId, subType : 'KalturaPlayReadyDigitalAudioOPId' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayReadyDigitalAudioOPIdHolder',KalturaPlayReadyDigitalAudioOPIdHolder);
