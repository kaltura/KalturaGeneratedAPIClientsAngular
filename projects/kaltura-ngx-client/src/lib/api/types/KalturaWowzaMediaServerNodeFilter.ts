
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaWowzaMediaServerNodeBaseFilter, KalturaWowzaMediaServerNodeBaseFilterArgs } from './KalturaWowzaMediaServerNodeBaseFilter';

export interface KalturaWowzaMediaServerNodeFilterArgs  extends KalturaWowzaMediaServerNodeBaseFilterArgs {
    
}


export class KalturaWowzaMediaServerNodeFilter extends KalturaWowzaMediaServerNodeBaseFilter {

    

    constructor(data? : KalturaWowzaMediaServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWowzaMediaServerNodeFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWowzaMediaServerNodeFilter'] = KalturaWowzaMediaServerNodeFilter;