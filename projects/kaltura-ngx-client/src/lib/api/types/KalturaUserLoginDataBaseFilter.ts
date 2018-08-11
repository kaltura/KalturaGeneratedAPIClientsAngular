
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaUserLoginDataBaseFilterArgs  extends KalturaRelatedFilterArgs {
    loginEmailEqual? : string;
}


export class KalturaUserLoginDataBaseFilter extends KalturaRelatedFilter {

    loginEmailEqual : string;

    constructor(data? : KalturaUserLoginDataBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserLoginDataBaseFilter' },
				loginEmailEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserLoginDataBaseFilter'] = KalturaUserLoginDataBaseFilter;