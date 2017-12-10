
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaSyncCategoryPrivacyContextJobDataArgs  extends KalturaJobDataArgs {
    categoryId? : number;
	lastUpdatedCategoryEntryCreatedAt? : number;
	lastUpdatedCategoryCreatedAt? : number;
}


export class KalturaSyncCategoryPrivacyContextJobData extends KalturaJobData {

    categoryId : number;
	lastUpdatedCategoryEntryCreatedAt : number;
	lastUpdatedCategoryCreatedAt : number;

    constructor(data? : KalturaSyncCategoryPrivacyContextJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSyncCategoryPrivacyContextJobData' },
				categoryId : { type : 'n' },
				lastUpdatedCategoryEntryCreatedAt : { type : 'n' },
				lastUpdatedCategoryCreatedAt : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSyncCategoryPrivacyContextJobData',KalturaSyncCategoryPrivacyContextJobData);
