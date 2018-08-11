
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaEntryResourceArgs  extends KalturaContentResourceArgs {
    entryId? : string;
	flavorParamsId? : number;
}


export class KalturaEntryResource extends KalturaContentResource {

    entryId : string;
	flavorParamsId : number;

    constructor(data? : KalturaEntryResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryResource' },
				entryId : { type : 's' },
				flavorParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryResource'] = KalturaEntryResource;