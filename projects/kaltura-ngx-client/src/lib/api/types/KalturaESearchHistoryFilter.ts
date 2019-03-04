
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchBaseFilter, KalturaESearchBaseFilterArgs } from './KalturaESearchBaseFilter';

export interface KalturaESearchHistoryFilterArgs  extends KalturaESearchBaseFilterArgs {
    searchTermStartsWith? : string;
	searchedObjectIn? : string;
}


export class KalturaESearchHistoryFilter extends KalturaESearchBaseFilter {

    searchTermStartsWith : string;
	searchedObjectIn : string;

    constructor(data? : KalturaESearchHistoryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchHistoryFilter' },
				searchTermStartsWith : { type : 's' },
				searchedObjectIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchHistoryFilter'] = KalturaESearchHistoryFilter;