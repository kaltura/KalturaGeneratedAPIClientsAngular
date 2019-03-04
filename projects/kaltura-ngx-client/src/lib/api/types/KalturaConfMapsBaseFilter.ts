
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaConfMapsBaseFilterArgs  extends KalturaRelatedFilterArgs {
    nameEqual? : string;
	relatedHostEqual? : string;
	versionEqual? : number;
}


export class KalturaConfMapsBaseFilter extends KalturaRelatedFilter {

    nameEqual : string;
	relatedHostEqual : string;
	versionEqual : number;

    constructor(data? : KalturaConfMapsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfMapsBaseFilter' },
				nameEqual : { type : 's' },
				relatedHostEqual : { type : 's' },
				versionEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConfMapsBaseFilter'] = KalturaConfMapsBaseFilter;