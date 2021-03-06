
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaQuizFilterArgs  extends KalturaRelatedFilterArgs {
    entryIdEqual? : string;
	entryIdIn? : string;
}


export class KalturaQuizFilter extends KalturaRelatedFilter {

    entryIdEqual : string;
	entryIdIn : string;

    constructor(data? : KalturaQuizFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuizFilter' },
				entryIdEqual : { type : 's' },
				entryIdIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaQuizFilter'] = KalturaQuizFilter;