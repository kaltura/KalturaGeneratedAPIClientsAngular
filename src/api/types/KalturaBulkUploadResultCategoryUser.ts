
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultCategoryUserArgs  extends KalturaBulkUploadResultArgs {
    categoryId? : number;
	categoryReferenceId? : string;
	userId? : string;
	permissionLevel? : number;
	updateMethod? : number;
	requiredObjectStatus? : number;
}


export class KalturaBulkUploadResultCategoryUser extends KalturaBulkUploadResult {

    categoryId : number;
	categoryReferenceId : string;
	userId : string;
	permissionLevel : number;
	updateMethod : number;
	requiredObjectStatus : number;

    constructor(data? : KalturaBulkUploadResultCategoryUserArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultCategoryUser' },
				categoryId : { type : 'n' },
				categoryReferenceId : { type : 's' },
				userId : { type : 's' },
				permissionLevel : { type : 'n' },
				updateMethod : { type : 'n' },
				requiredObjectStatus : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadResultCategoryUser',KalturaBulkUploadResultCategoryUser);
