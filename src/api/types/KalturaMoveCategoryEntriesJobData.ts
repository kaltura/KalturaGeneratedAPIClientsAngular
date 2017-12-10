
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaMoveCategoryEntriesJobDataArgs  extends KalturaJobDataArgs {
    srcCategoryId? : number;
	destCategoryId? : number;
	lastMovedCategoryId? : number;
	lastMovedCategoryPageIndex? : number;
	lastMovedCategoryEntryPageIndex? : number;
	moveFromChildren? : boolean;
	destCategoryFullIds? : string;
}


export class KalturaMoveCategoryEntriesJobData extends KalturaJobData {

    srcCategoryId : number;
	destCategoryId : number;
	lastMovedCategoryId : number;
	lastMovedCategoryPageIndex : number;
	lastMovedCategoryEntryPageIndex : number;
	moveFromChildren : boolean;
	destCategoryFullIds : string;

    constructor(data? : KalturaMoveCategoryEntriesJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMoveCategoryEntriesJobData' },
				srcCategoryId : { type : 'n' },
				destCategoryId : { type : 'n' },
				lastMovedCategoryId : { type : 'n' },
				lastMovedCategoryPageIndex : { type : 'n' },
				lastMovedCategoryEntryPageIndex : { type : 'n' },
				moveFromChildren : { type : 'b' },
				destCategoryFullIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMoveCategoryEntriesJobData',KalturaMoveCategoryEntriesJobData);
