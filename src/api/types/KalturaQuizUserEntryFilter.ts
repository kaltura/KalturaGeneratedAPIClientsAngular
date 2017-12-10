
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaQuizUserEntryBaseFilter, KalturaQuizUserEntryBaseFilterArgs } from './KalturaQuizUserEntryBaseFilter';

export interface KalturaQuizUserEntryFilterArgs  extends KalturaQuizUserEntryBaseFilterArgs {
    
}


export class KalturaQuizUserEntryFilter extends KalturaQuizUserEntryBaseFilter {

    

    constructor(data? : KalturaQuizUserEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuizUserEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuizUserEntryFilter',KalturaQuizUserEntryFilter);
