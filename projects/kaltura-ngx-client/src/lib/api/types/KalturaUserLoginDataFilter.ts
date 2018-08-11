
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserLoginDataBaseFilter, KalturaUserLoginDataBaseFilterArgs } from './KalturaUserLoginDataBaseFilter';

export interface KalturaUserLoginDataFilterArgs  extends KalturaUserLoginDataBaseFilterArgs {
    
}


export class KalturaUserLoginDataFilter extends KalturaUserLoginDataBaseFilter {

    

    constructor(data? : KalturaUserLoginDataFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserLoginDataFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserLoginDataFilter'] = KalturaUserLoginDataFilter;