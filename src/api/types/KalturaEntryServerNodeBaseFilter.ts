
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaEntryServerNodeBaseFilterArgs  extends KalturaFilterArgs {
    entryIdEqual? : string;
	entryIdIn? : string;
	serverNodeIdEqual? : number;
	createdAtLessThanOrEqual? : Date;
	createdAtGreaterThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	statusEqual? : KalturaEntryServerNodeStatus;
	statusIn? : string;
	serverTypeEqual? : KalturaEntryServerNodeType;
}


export class KalturaEntryServerNodeBaseFilter extends KalturaFilter {

    entryIdEqual : string;
	entryIdIn : string;
	serverNodeIdEqual : number;
	createdAtLessThanOrEqual : Date;
	createdAtGreaterThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	statusEqual : KalturaEntryServerNodeStatus;
	statusIn : string;
	serverTypeEqual : KalturaEntryServerNodeType;

    constructor(data? : KalturaEntryServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryServerNodeBaseFilter' },
				entryIdEqual : { type : 's' },
				entryIdIn : { type : 's' },
				serverNodeIdEqual : { type : 'n' },
				createdAtLessThanOrEqual : { type : 'd' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaEntryServerNodeStatus, subType : 'KalturaEntryServerNodeStatus' },
				statusIn : { type : 's' },
				serverTypeEqual : { type : 'es', subTypeConstructor : KalturaEntryServerNodeType, subType : 'KalturaEntryServerNodeType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryServerNodeBaseFilter',KalturaEntryServerNodeBaseFilter);
