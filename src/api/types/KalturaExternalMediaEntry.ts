
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaExternalMediaSourceType } from './KalturaExternalMediaSourceType';
import { KalturaMediaEntry, KalturaMediaEntryArgs } from './KalturaMediaEntry';

export interface KalturaExternalMediaEntryArgs  extends KalturaMediaEntryArgs {
    externalSourceType? : KalturaExternalMediaSourceType;
}


export class KalturaExternalMediaEntry extends KalturaMediaEntry {

    externalSourceType : KalturaExternalMediaSourceType;
	readonly assetParamsIds : string;

    constructor(data? : KalturaExternalMediaEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalMediaEntry' },
				externalSourceType : { type : 'es', subTypeConstructor : KalturaExternalMediaSourceType, subType : 'KalturaExternalMediaSourceType' },
				assetParamsIds : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalMediaEntry',KalturaExternalMediaEntry);
