
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseEntry, KalturaBaseEntryArgs } from './KalturaBaseEntry';

export interface KalturaDataEntryArgs  extends KalturaBaseEntryArgs {
    dataContent? : string;
	retrieveDataContentByGet? : boolean;
}


export class KalturaDataEntry extends KalturaBaseEntry {

    dataContent : string;
	retrieveDataContentByGet : boolean;

    constructor(data? : KalturaDataEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDataEntry' },
				dataContent : { type : 's' },
				retrieveDataContentByGet : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDataEntry',KalturaDataEntry);
