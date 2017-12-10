
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaIndexTagsByPrivacyContextJobDataArgs  extends KalturaJobDataArgs {
    changedCategoryId? : number;
	deletedPrivacyContexts? : string;
	addedPrivacyContexts? : string;
}


export class KalturaIndexTagsByPrivacyContextJobData extends KalturaJobData {

    changedCategoryId : number;
	deletedPrivacyContexts : string;
	addedPrivacyContexts : string;

    constructor(data? : KalturaIndexTagsByPrivacyContextJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIndexTagsByPrivacyContextJobData' },
				changedCategoryId : { type : 'n' },
				deletedPrivacyContexts : { type : 's' },
				addedPrivacyContexts : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIndexTagsByPrivacyContextJobData',KalturaIndexTagsByPrivacyContextJobData);
