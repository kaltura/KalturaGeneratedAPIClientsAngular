
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryFilter, KalturaUserEntryFilterArgs } from './KalturaUserEntryFilter';

export interface KalturaQuizUserEntryBaseFilterArgs  extends KalturaUserEntryFilterArgs {
    
}


export class KalturaQuizUserEntryBaseFilter extends KalturaUserEntryFilter {

    

    constructor(data? : KalturaQuizUserEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuizUserEntryBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuizUserEntryBaseFilter',KalturaQuizUserEntryBaseFilter);
