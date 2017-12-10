
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDocumentEntryBaseFilter, KalturaDocumentEntryBaseFilterArgs } from './KalturaDocumentEntryBaseFilter';

export interface KalturaDocumentEntryFilterArgs  extends KalturaDocumentEntryBaseFilterArgs {
    
}


export class KalturaDocumentEntryFilter extends KalturaDocumentEntryBaseFilter {

    

    constructor(data? : KalturaDocumentEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDocumentEntryFilter',KalturaDocumentEntryFilter);
