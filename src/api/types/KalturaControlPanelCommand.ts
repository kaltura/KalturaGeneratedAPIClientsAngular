
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaControlPanelCommandType } from './KalturaControlPanelCommandType';
import { KalturaControlPanelCommandTargetType } from './KalturaControlPanelCommandTargetType';
import { KalturaControlPanelCommandStatus } from './KalturaControlPanelCommandStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaControlPanelCommandArgs  extends KalturaObjectBaseArgs {
    createdBy? : string;
	updatedBy? : string;
	createdById? : number;
	schedulerId? : number;
	workerId? : number;
	workerConfiguredId? : number;
	workerName? : number;
	batchIndex? : number;
	type? : KalturaControlPanelCommandType;
	targetType? : KalturaControlPanelCommandTargetType;
	status? : KalturaControlPanelCommandStatus;
	cause? : string;
	description? : string;
	errorDescription? : string;
}


export class KalturaControlPanelCommand extends KalturaObjectBase {

    readonly id : number;
	readonly createdAt : Date;
	createdBy : string;
	readonly updatedAt : Date;
	updatedBy : string;
	createdById : number;
	schedulerId : number;
	workerId : number;
	workerConfiguredId : number;
	workerName : number;
	batchIndex : number;
	type : KalturaControlPanelCommandType;
	targetType : KalturaControlPanelCommandTargetType;
	status : KalturaControlPanelCommandStatus;
	cause : string;
	description : string;
	errorDescription : string;

    constructor(data? : KalturaControlPanelCommandArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaControlPanelCommand' },
				id : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				createdBy : { type : 's' },
				updatedAt : { type : 'd', readOnly : true },
				updatedBy : { type : 's' },
				createdById : { type : 'n' },
				schedulerId : { type : 'n' },
				workerId : { type : 'n' },
				workerConfiguredId : { type : 'n' },
				workerName : { type : 'n' },
				batchIndex : { type : 'n' },
				type : { type : 'en', subTypeConstructor : KalturaControlPanelCommandType, subType : 'KalturaControlPanelCommandType' },
				targetType : { type : 'en', subTypeConstructor : KalturaControlPanelCommandTargetType, subType : 'KalturaControlPanelCommandTargetType' },
				status : { type : 'en', subTypeConstructor : KalturaControlPanelCommandStatus, subType : 'KalturaControlPanelCommandStatus' },
				cause : { type : 's' },
				description : { type : 's' },
				errorDescription : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaControlPanelCommand',KalturaControlPanelCommand);
