
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaStringResourceArgs  extends KalturaContentResourceArgs {
    content? : string;
}


export class KalturaStringResource extends KalturaContentResource {

    content : string;

    constructor(data? : KalturaStringResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStringResource' },
				content : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaStringResource'] = KalturaStringResource;