
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaResource, KalturaResourceArgs } from './KalturaResource';

export interface KalturaContentResourceArgs  extends KalturaResourceArgs {
    
}


export class KalturaContentResource extends KalturaResource {

    

    constructor(data? : KalturaContentResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaContentResource' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaContentResource'] = KalturaContentResource;