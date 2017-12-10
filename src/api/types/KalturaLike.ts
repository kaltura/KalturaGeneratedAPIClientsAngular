
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLikeArgs  extends KalturaObjectBaseArgs {
    entryId? : string;
	userId? : string;
	createdAt? : Date;
}


export class KalturaLike extends KalturaObjectBase {

    entryId : string;
	userId : string;
	createdAt : Date;

    constructor(data? : KalturaLikeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLike' },
				entryId : { type : 's' },
				userId : { type : 's' },
				createdAt : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLike',KalturaLike);
