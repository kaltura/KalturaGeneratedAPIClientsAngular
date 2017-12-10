
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaEntryResource',KalturaEntryResource);
