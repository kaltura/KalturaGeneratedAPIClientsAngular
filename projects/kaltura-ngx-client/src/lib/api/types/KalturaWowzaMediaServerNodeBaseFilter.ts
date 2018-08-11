
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaServerNodeFilter, KalturaMediaServerNodeFilterArgs } from './KalturaMediaServerNodeFilter';

export interface KalturaWowzaMediaServerNodeBaseFilterArgs  extends KalturaMediaServerNodeFilterArgs {
    
}


export class KalturaWowzaMediaServerNodeBaseFilter extends KalturaMediaServerNodeFilter {

    

    constructor(data? : KalturaWowzaMediaServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWowzaMediaServerNodeBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWowzaMediaServerNodeBaseFilter'] = KalturaWowzaMediaServerNodeBaseFilter;