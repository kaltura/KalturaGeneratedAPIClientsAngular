
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryEntryStatus } from './KalturaCategoryEntryStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCategoryEntryArgs  extends KalturaObjectBaseArgs {
    categoryId? : number;
	entryId? : string;
}


export class KalturaCategoryEntry extends KalturaObjectBase {

    categoryId : number;
	entryId : string;
	readonly createdAt : Date;
	readonly categoryFullIds : string;
	readonly status : KalturaCategoryEntryStatus;
	readonly creatorUserId : string;

    constructor(data? : KalturaCategoryEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryEntry' },
				categoryId : { type : 'n' },
				entryId : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				categoryFullIds : { type : 's', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaCategoryEntryStatus, subType : 'KalturaCategoryEntryStatus' },
				creatorUserId : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryEntry',KalturaCategoryEntry);
