
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaQuizUserEntryBaseFilter, KalturaQuizUserEntryBaseFilterArgs } from './KalturaQuizUserEntryBaseFilter';

export interface KalturaQuizUserEntryFilterArgs  extends KalturaQuizUserEntryBaseFilterArgs {
    versionEqual? : number;
}


export class KalturaQuizUserEntryFilter extends KalturaQuizUserEntryBaseFilter {

    versionEqual : number;

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
                objectType : { type : 'c', default : 'KalturaQuizUserEntryFilter' },
				versionEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaQuizUserEntryFilter'] = KalturaQuizUserEntryFilter;